import React from 'react';
import { MOCK_UPCOMING_BOOKINGS, MOCK_PAST_BOOKINGS } from '../constants';
import { Booking } from '../types';
import MapPinIcon from '../components/icons/MapPinIcon';
import ClockIcon from '../components/icons/ClockIcon';


const BookingCard: React.FC<{ booking: Booking }> = ({ booking }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col space-y-3">
        <div className="flex items-start space-x-4">
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
        </div>
        {booking.isUpcoming && (
            <div className="flex space-x-2 pt-2 border-t border-slate-100">
                <button className="w-full text-center py-2 px-3 bg-slate-100 text-slate-700 font-semibold rounded-md text-sm hover:bg-slate-200 transition">Modify</button>
                <button className="w-full text-center py-2 px-3 bg-red-50 text-red-600 font-semibold rounded-md text-sm hover:bg-red-100 transition">Cancel</button>
            </div>
        )}
    </div>
);


const BookingsScreen: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">My Bookings</h1>
      </header>
      
      <section>
        <h2 className="text-lg font-bold mb-2">Upcoming</h2>
        <div className="space-y-3">
          {MOCK_UPCOMING_BOOKINGS.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
          {MOCK_UPCOMING_BOOKINGS.length === 0 && (
            <p className="text-slate-500 text-center py-4 bg-white rounded-lg">No upcoming bookings.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-2">Past</h2>
        <div className="space-y-3">
          {MOCK_PAST_BOOKINGS.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
          {MOCK_PAST_BOOKINGS.length === 0 && (
            <p className="text-slate-500 text-center py-4 bg-white rounded-lg">No past bookings found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingsScreen;
