import React from 'react';
import Logo from '../components/Logo';
import LibraryIllustration from '../components/icons/LibraryIllustration';

interface LandingScreenProps {
  onNavigateToLogin: () => void;
  onNavigateToSignup: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onNavigateToLogin, onNavigateToSignup }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between p-6">
      <header className="flex items-center space-x-2">
        <Logo />
        <span className="font-bold text-slate-700">Bruno</span>
      </header>
      
      <main className="flex flex-col items-center text-center">
        <LibraryIllustration className="w-full max-w-xs h-auto" />
        <div className="mt-8">
            <h1 className="text-3xl font-bold text-slate-900">Your Campus Resources, Reimagined.</h1>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">
            Instantly find and book study rooms, equipment, and books—all in one place.
            </p>
        </div>
      </main>
      
      <footer className="w-full max-w-sm mx-auto">
        <div className="space-y-3">
             <button
                onClick={onNavigateToSignup}
                className="w-full text-center py-3 px-4 bg-yudi-blue text-white font-semibold rounded-lg text-md hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                Get Started
              </button>
             <button
                onClick={onNavigateToLogin}
                className="w-full text-center py-3 px-4 bg-slate-200 text-slate-700 font-semibold rounded-lg text-md hover:bg-slate-300 transition"
              >
                Log In
              </button>
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">
            By continuing, you agree to our Terms of Service.
        </p>
      </footer>
    </div>
  );
};

export default LandingScreen;