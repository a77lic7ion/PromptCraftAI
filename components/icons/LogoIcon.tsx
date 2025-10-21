import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0118.685 12H16.5a.75.75 0 000 1.5h2.185a9.75 9.75 0 01-6.793 8.662.75.75 0 10.57 1.393A11.25 11.25 0 0021.75 12c0-5.28-3.79-9.644-8.787-10.714z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M11.037 2.286a.75.75 0 00-1.071-1.052A11.25 11.25 0 002.25 12c0 5.28 3.79 9.644 8.787 10.714a.75.75 0 10.57-1.393A9.75 9.75 0 015.315 12H7.5a.75.75 0 000-1.5H5.315a9.75 9.75 0 016.793-8.662z"
      clipRule="evenodd"
    />
  </svg>
);

export default LogoIcon;
