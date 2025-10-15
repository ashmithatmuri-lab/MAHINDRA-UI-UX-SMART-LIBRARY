import React from 'react';
import { BorrowedItem } from '../types';

interface BorrowedScreenProps {
    borrowedItems: BorrowedItem[];
}

const BorrowedItemCard: React.FC<{ item: BorrowedItem }> = ({ item }) => {
    const dueDateColor = item.isOverdue ? 'text-red-600' : 'text-slate-600';

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4">
            <img src={item.resource.imageUrl} alt={item.resource.title} className="w-20 h-28 object-cover rounded-md flex-shrink-0 bg-slate-200" />
            <div className="flex-grow flex flex-col justify-between h-28">
                <div>
                    <h3 className="font-bold text-md mb-1">{item.resource.title}</h3>
                    {item.resource.author && <p className="text-sm text-slate-500">{item.resource.author}</p>}
                </div>
                <div>
                    <p className={`text-sm font-semibold ${dueDateColor}`}>{item.dueDate}</p>
                    <button className="mt-2 w-full text-center py-2 px-3 bg-yudi-blue text-white font-semibold rounded-md text-sm hover:bg-blue-700 transition">Renew</button>
                </div>
            </div>
        </div>
    );
};

const BorrowedScreen: React.FC<BorrowedScreenProps> = ({ borrowedItems }) => {
  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Borrowed Items</h1>
      </header>

      <div className="space-y-3">
        {borrowedItems.map(item => (
          <BorrowedItemCard key={item.id} item={item} />
        ))}
         {borrowedItems.length === 0 && (
             <p className="text-slate-500 text-center py-4 bg-white rounded-lg">You have no borrowed items.</p>
         )}
      </div>
    </div>
  );
};

export default BorrowedScreen;
