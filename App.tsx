import React, { useState, useEffect } from 'react';
import { Screen, Resource, BorrowedItem, Availability, ResourceType } from './types';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import BookingsScreen from './screens/BookingsScreen';
import BorrowedScreen from './screens/BorrowedScreen';
import ProfileScreen from './screens/ProfileScreen';
import Logo from './components/Logo';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import LandingScreen from './screens/LandingScreen';
import ItemDetailScreen from './screens/ItemDetailScreen';
import { MOCK_RESOURCES, MOCK_BORROWED_ITEMS } from './constants';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authStatus, setAuthStatus] = useState<'landing' | 'login' | 'signup'>('landing');
  const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);

  // App-wide state
  const [resources, setResources] = useState<Resource[]>(MOCK_RESOURCES);
  const [borrowedItems, setBorrowedItems] = useState<BorrowedItem[]>(MOCK_BORROWED_ITEMS);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleBorrowResource = (resourceToBorrow: Resource) => {
    if (resourceToBorrow.availability !== Availability.Available) {
       setToast({ message: "You've been added to the waitlist!", type: 'info' });
       return;
    }

    // Update resource availability
    setResources(prevResources =>
      prevResources.map(r =>
        r.id === resourceToBorrow.id ? { ...r, availability: Availability.CheckedOut } : r
      )
    );

    // Add to borrowed items
    const newBorrowedItem: BorrowedItem = {
      id: `borrow_${Date.now()}`,
      resource: { ...resourceToBorrow, availability: Availability.CheckedOut },
      dueDate: 'In 14 days',
      isOverdue: false,
    };
    setBorrowedItems(prev => [newBorrowedItem, ...prev]);
    
    setToast({ message: `${resourceToBorrow.title} borrowed successfully!`, type: 'success' });
    setSelectedResource(null); // Go back to the previous screen
    setActiveScreen(Screen.Borrowed); // Switch to borrowed tab to see the new item
  };

  const renderScreen = () => {
    // If a resource is selected, show the detail screen
    if (selectedResource) {
      return (
        <ItemDetailScreen
          resource={selectedResource}
          onBack={() => setSelectedResource(null)}
          onBorrow={handleBorrowResource}
        />
      );
    }

    // Otherwise, show the main screen based on the bottom nav
    switch (activeScreen) {
      case Screen.Home:
        return <HomeScreen />;
      case Screen.Search:
        return <SearchScreen resources={resources} onSelectResource={setSelectedResource} />;
      case Screen.Bookings:
        return <BookingsScreen />;
      case Screen.Borrowed:
        return <BorrowedScreen borrowedItems={borrowedItems} />;
      case Screen.Profile:
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  if (!isAuthenticated) {
    switch (authStatus) {
      case 'landing':
        return (
          <LandingScreen
            onNavigateToLogin={() => setAuthStatus('login')}
            onNavigateToSignup={() => setAuthStatus('signup')}
          />
        );
      case 'login':
        return (
          <LoginScreen
            onLogin={() => setIsAuthenticated(true)}
            onSwitchToSignup={() => setAuthStatus('signup')}
          />
        );
      case 'signup':
        return (
          <SignupScreen
            onSignup={() => setIsAuthenticated(true)}
            onSwitchToLogin={() => setAuthStatus('login')}
          />
        );
      default:
        return (
           <LandingScreen
            onNavigateToLogin={() => setAuthStatus('login')}
            onNavigateToSignup={() => setAuthStatus('signup')}
          />
        );
    }
  }

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
      <Toast message={toast?.message} type={toast?.type} isVisible={!!toast} />
      {!selectedResource && (
        <header className="p-4 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-10">
          <Logo />
          <h1 className="text-sm font-bold text-yudi-blue tracking-wider uppercase">Bruno</h1>
        </header>
      )}
      <main className="pb-20">
        {renderScreen()}
      </main>
      {!selectedResource && (
         <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      )}
    </div>
  );
};

export default App;