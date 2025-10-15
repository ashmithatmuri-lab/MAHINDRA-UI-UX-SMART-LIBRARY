import React from 'react';
import { USER_PROFILE } from '../constants';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';

const ProfileScreen: React.FC = () => {

  const menuItems = [
    { label: 'Account Settings' },
    { label: 'Notifications' },
    { label: 'Borrowing History' },
    { label: 'Accessibility' },
    { label: 'Help & Support' },
  ];


  return (
    <div className="space-y-6">
      <div className="bg-white p-6 flex flex-col items-center text-center">
        <img src={USER_PROFILE.avatarUrl} alt={USER_PROFILE.name} className="w-24 h-24 rounded-full mb-4 ring-4 ring-yudi-blue/20 object-cover" />
        <h1 className="text-2xl font-bold text-slate-900">{USER_PROFILE.name}</h1>
        <p className="text-slate-500">{USER_PROFILE.email}</p>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-lg shadow-sm">
          {menuItems.map((item, index) => (
            <button key={item.label} className={`w-full text-left p-4 flex justify-between items-center ${index < menuItems.length - 1 ? 'border-b border-slate-100' : ''}`}>
              <span className="font-semibold text-slate-700">{item.label}</span>
              <ChevronRightIcon className="w-5 h-5 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

       <div className="px-4">
        <button className="w-full text-center py-3 px-4 bg-red-50 text-red-600 font-semibold rounded-lg text-md hover:bg-red-100 transition">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
