import React, { useState, useMemo } from 'react';
import { Resource, ResourceType, Availability } from '../types';
import SearchIcon from '../components/icons/SearchIcon';
import ClockIcon from '../components/icons/ClockIcon';

interface SearchScreenProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

const AvailabilityBadge: React.FC<{ availability: Availability }> = ({ availability }) => {
  const baseClasses = 'px-2.5 py-0.5 text-xs font-semibold rounded-full';
  switch (availability) {
    case Availability.Available:
      return <span className={`${baseClasses} bg-green-100 text-green-800`}>Available</span>;
    case Availability.CheckedOut:
    case Availability.Reserved:
      return <span className={`${baseClasses} bg-red-100 text-red-800`}>{availability}</span>;
    default:
      return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>{availability}</span>;
  }
};

const ResourceCard: React.FC<{ resource: Resource, onSelect: () => void }> = ({ resource, onSelect }) => (
  <button onClick={onSelect} className="w-full bg-white p-3 rounded-lg shadow-sm flex space-x-4 text-left hover:shadow-md transition-shadow">
    <img src={resource.imageUrl} alt={resource.title} className="w-24 h-24 object-cover rounded-md flex-shrink-0 bg-slate-200" />
    <div className="flex-grow">
      <p className="text-xs font-semibold text-yudi-blue uppercase tracking-wider">{resource.type}</p>
      <h3 className="font-bold text-md mb-1">{resource.title}</h3>
      {resource.author && <p className="text-sm text-slate-500 mb-2">{resource.author}</p>}
      <div className="flex items-center justify-between">
         <AvailabilityBadge availability={resource.availability} />
      </div>
      {(resource.availability === Availability.CheckedOut || resource.availability === Availability.Reserved) && resource.nextAvailableTime && (
         <div className="flex items-center text-xs text-slate-500 mt-2">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>{resource.nextAvailableTime}</span>
        </div>
      )}
    </div>
  </button>
);


const SearchScreen: React.FC<SearchScreenProps> = ({ resources, onSelectResource }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');

    const filteredResources = useMemo(() => {
        return resources.filter(resource => {
            const matchesType = selectedType === 'All' || resource.type === selectedType;
            const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (resource.author && resource.author.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesType && matchesSearch;
        });
    }, [searchTerm, selectedType, resources]);
    
    const resourceTypes: (ResourceType | 'All')[] = ['All', ...Object.values(ResourceType)];

  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search books, rooms, equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yudi-blue focus:border-yudi-blue outline-none transition"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4">
        {resourceTypes.map(type => {
            const isActive = selectedType === type;
            return (
                <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                        isActive ? 'bg-yudi-blue text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                >
                    {type}
                </button>
            )
        })}
      </div>
      
      <div className="space-y-3">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} onSelect={() => onSelectResource(resource)} />
        ))}
         {filteredResources.length === 0 && (
            <div className="text-center py-10">
                <p className="text-slate-500">No resources found.</p>
                <p className="text-sm text-slate-400">Try adjusting your search or filters.</p>
            </div>
         )}
      </div>

    </div>
  );
};

export default SearchScreen;
