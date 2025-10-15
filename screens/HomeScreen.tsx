import React from 'react';
import { MOCK_UPCOMING_BOOKINGS, USER_PROFILE } from '../constants';
import QrCodeIcon from '../components/icons/QrCodeIcon';
import SearchIcon from '../components/icons/SearchIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import ClockIcon from '../components/icons/ClockIcon';

const HomeScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Welcome, {USER_PROFILE.name.split(' ')[0]}</h1>
        <p className="text-slate-500">Access. Reserve. Learn. Smarter.</p>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center justify-center p-4 bg-yudi-blue text-white rounded-xl shadow-md hover:bg-blue-700 transition-all aspect-square">
          <QrCodeIcon className="w-12 h-12 mb-2" />
          <span className="font-semibold text-center">Scan to Borrow</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-white text-slate-800 rounded-xl shadow-md hover:bg-slate-100 transition-all aspect-square">
          <SearchIcon className="w-12 h-12 mb-2 text-yudi-blue" />
          <span className="font-semibold text-center">Search Resources</span>
        </button>
      </div>

      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Upcoming Bookings</h2>
          <button className="text-sm font-semibold text-yudi-blue">View All</button>
        </div>
        <div className="space-y-3">
          {MOCK_UPCOMING_BOOKINGS.map(booking => (
            <div key={booking.id} className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-4">
              <img src={booking.resource.imageUrl} alt={booking.resource.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0 bg-slate-200" />
              <div className="flex-grow">
                <p className="font-semibold text-slate-600 text-sm">{booking.resource.type}</p>

                <h3 className="font-bold text-md mb-1">{booking.resource.title}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-1">
                  <ClockIcon className="w-4 h-4 mr-1.5" />
                  <span>{booking.startTime} - {booking.endTime}</span>
                </div>
                 <div className="flex items-center text-sm text-slate-500">
                    <MapPinIcon className="w-4 h-4 mr-1.5" />
                    <span>{booking.resource.location}</span>
                </div>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-slate-400 self-center" />
            </div>
          ))}
           {MOCK_UPCOMING_BOOKINGS.length === 0 && (
             <p className="text-slate-500 text-center py-4">No upcoming bookings.</p>
           )}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;