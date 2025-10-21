import React from 'react';

const PurposeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.125-1.5M12 16.5l1.125-1.5m0 0l1.125 1.5M12 16.5l-1.125 1.5M12 16.5l-2.252.88a2.25 2.25 0 01-1.634-.22l-2.242-1.34a2.25 2.25 0 00-1.634-.22l-2.242 1.34a2.25 2.25 0 01-1.634.22L12 16.5z" />
  </svg>
);

export default PurposeIcon;
