import React from 'react';
import { Screen } from '../types';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';
import CalendarIcon from './icons/CalendarIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import UserIcon from './icons/UserIcon';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const navItems = [
  { screen: Screen.Home, label: 'Home', icon: HomeIcon },
  { screen: Screen.Search, label: 'Search', icon: SearchIcon },
  { screen: Screen.Bookings, label: 'Bookings', icon: CalendarIcon },
  { screen: Screen.Borrowed, label: 'Borrowed', icon: BookOpenIcon },
  { screen: Screen.Profile, label: 'Profile', icon: UserIcon },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 shadow-t-lg">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeScreen === item.screen;
          return (
            <button
              key={item.screen}
              onClick={() => setActiveScreen(item.screen)}
              className={`flex flex-col items-center justify-center w-full h-full text-xs font-medium transition-colors duration-200 ${
                isActive ? 'text-yudi-blue' : 'text-slate-500 hover:text-yudi-blue'
              }`}
            >
              <item.icon className="w-6 h-6 mb-0.5" />
              <span className="text-[11px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;