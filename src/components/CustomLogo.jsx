import React from 'react';

const CustomLogo = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 8 100 92" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Stairs */}
    <rect x="49" y="75" width="14" height="25" />
    <rect x="67" y="60" width="14" height="40" />
    <rect x="85" y="45" width="14" height="55" />
    
    {/* Briefcase */}
    <rect x="10" y="32" width="22" height="26" rx="4" transform="rotate(25 21 45)" />
    
    {/* Person */}
    <circle cx="63" cy="18" r="8" />
    <path 
      d="M58,28 L43,53 L55,73 M43,53 L28,65 L14,65 M53,32 L66,32 L75,40 M53,32 L39,38 L31,48" 
      stroke="currentColor" 
      strokeWidth="9" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
    />
  </svg>
);

export default CustomLogo;
