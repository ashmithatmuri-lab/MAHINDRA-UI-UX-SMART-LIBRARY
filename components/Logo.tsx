import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3z" stroke="#428DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" stroke="#428DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Logo;