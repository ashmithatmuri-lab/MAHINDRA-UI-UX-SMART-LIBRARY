import React from 'react';
import { Resource, Availability } from '../types';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import ClockIcon from '../components/icons/ClockIcon';

interface ItemDetailScreenProps {
  resource: Resource;
  onBack: () => void;
  onBorrow: (resource: Resource) => void;
}

const AvailabilityStatus: React.FC<{ availability: Availability, nextAvailableTime?: string }> = ({ availability, nextAvailableTime }) => {
  if (availability === Availability.Available) {
    return (
      <div className="flex items-center space-x-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-700 font-semibold">Available Now</span>
      </div>
    );
  }

  return (
    <div className="flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
      <ClockIcon className="w-4 h-4 mr-1.5" />
      <span className="font-semibold">{availability === Availability.CheckedOut ? 'Checked Out' : 'Reserved'}</span>
      {nextAvailableTime && <span className="ml-1">· Next free: {nextAvailableTime}</span>}
    </div>
  );
};


const ItemDetailScreen: React.FC<ItemDetailScreenProps> = ({ resource, onBack, onBorrow }) => {
    const isAvailable = resource.availability === Availability.Available;

    const buttonClasses = `w-full text-center py-4 px-5 font-semibold rounded-lg text-lg transition shadow-lg`;
    const borrowButtonClasses = `${buttonClasses} bg-yudi-blue text-white hover:bg-blue-700 shadow-blue-500/30`;
    const waitlistButtonClasses = `${buttonClasses} bg-slate-600 text-white hover:bg-slate-700 shadow-slate-500/30`;

  return (
    <div>
        <header className="p-4 bg-white border-b border-slate-200 flex items-center sticky top-0 z-10">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100">
                <ArrowLeftIcon className="w-6 h-6 text-slate-700" />
            </button>
            <h1 className="text-lg font-bold text-slate-800 mx-auto pr-8 truncate">{resource.title}</h1>
        </header>

        <div className="p-4">
             <img src={resource.imageUrl} alt={resource.title} className="w-full h-64 object-cover rounded-xl shadow-lg bg-slate-200 mb-4" />
             
             <div className="bg-white p-5 rounded-lg shadow-sm">
                <p className="text-sm font-semibold text-yudi-blue uppercase tracking-wider mb-1">{resource.type}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{resource.title}</h2>
                {resource.author && <p className="text-lg text-slate-600 mb-4">{resource.author}</p>}
                
                <div className="flex items-center text-md text-slate-600 mb-4">
                    <MapPinIcon className="w-5 h-5 mr-2 text-slate-400" />
                    <span>{resource.location}</span>
                </div>

                <div className="py-4 border-t border-b border-slate-100">
                    <AvailabilityStatus availability={resource.availability} nextAvailableTime={resource.nextAvailableTime} />
                </div>
             </div>
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-sm border-t border-slate-200">
            <button
              onClick={() => onBorrow(resource)}
              className={isAvailable ? borrowButtonClasses : waitlistButtonClasses}
            >
              {isAvailable ? 'Borrow Now' : 'Join Waitlist'}
            </button>
        </div>
    </div>
  );
};

export default ItemDetailScreen;
