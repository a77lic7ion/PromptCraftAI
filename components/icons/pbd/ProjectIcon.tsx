import React from 'react';

const ProjectIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 6h.008v.008H5.25V6zm0 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008z" />
  </svg>
);

export default ProjectIcon;
