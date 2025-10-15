import React from 'react';
import Logo from '../components/Logo';

interface LoginScreenProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSwitchToSignup }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-sm">
        <header className="flex flex-col items-center text-center mb-8">
          <Logo />
          <h1 className="text-2xl font-bold text-slate-900 mt-4">Welcome Back</h1>
          <p className="text-slate-500">Log in to Bruno</p>
        </header>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              University ID or Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue="alex.j@university.edu"
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
              defaultValue="password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yudi-blue focus:border-yudi-blue outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="w-full text-center py-3 px-4 bg-yudi-blue text-white font-semibold rounded-lg text-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="font-semibold text-yudi-blue hover:underline">
              Sign Up
            </button>
          </p>
           <button className="mt-2 text-sm font-medium text-slate-500 hover:underline">
             Forgot Password?
           </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;