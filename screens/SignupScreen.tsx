import React from 'react';
import Logo from '../components/Logo';

interface SignupScreenProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onSignup, onSwitchToLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm">
        <header className="flex flex-col items-center text-center mb-8">
          <Logo />
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Create Account</h1>
          <p className="text-slate-500">Join Bruno</p>
        </header>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
           <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="e.g. Alex Johnson"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yudi-blue focus:border-yudi-blue outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              University Email
            </label>
            <input
              type="email"
              id="email"
               placeholder="e.g. alex.j@university.edu"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yudi-blue focus:border-yudi-blue outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yudi-blue focus:border-yudi-blue outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 px-4 bg-yudi-blue text-white font-semibold rounded-lg text-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-600">
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="font-semibold text-yudi-blue hover:underline">
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;