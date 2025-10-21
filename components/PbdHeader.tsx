import React from 'react';

const PbdHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-text-primary">Project Development Blueprint</h1>
        <p className="text-sm text-brand-text-secondary mt-1">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Status:</span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          In Progress
        </span>
      </div>
    </div>
  );
};

export default PbdHeader;
