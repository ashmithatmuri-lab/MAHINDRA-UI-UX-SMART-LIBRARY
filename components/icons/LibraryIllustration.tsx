import React from 'react';

const LibraryIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#93c5fd', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#428DFF', stopOpacity:1}} />
            </linearGradient>
        </defs>
        
        {/* Abstract background shapes */}
        <circle cx="250" cy="50" r="50" fill="url(#grad1)" opacity="0.1"/>
        <rect x="0" y="120" width="100" height="100" rx="20" fill="#428DFF" opacity="0.05" transform="rotate(-15 0 120)"/>

        {/* Central element - card stack */}
        <rect x="85" y="60" width="130" height="100" rx="12" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="2" transform="rotate(-5 150 110)"/>
        <rect x="75" y="50" width="150" height="100" rx="12" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="2"/>
        
        {/* Content on front card */}
        <rect x="95" y="70" width="80" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="95" y="90" width="110" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="95" y="110" width="50" height="20" rx="6" fill="url(#grad1)"/>

        {/* Floating icon elements */}
        <g transform="translate(40 60)">
            <circle cx="10" cy="10" r="15" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="2"/>
            <path d="M10 5 v10 M5 10 h10" stroke="#428DFF" strokeWidth="2" strokeLinecap="round"/>
        </g>
        
         <g transform="translate(230 130)">
            <circle cx="15" cy="15" r="20" fill="#FFFFFF" stroke="#e2e8f0" strokeWidth="2"/>
            <path d="m10 15 4 4 8-8" stroke="#428DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);

export default LibraryIllustration;