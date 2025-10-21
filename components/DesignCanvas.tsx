import React from 'react';
import Card from './ui/Card';
import CanvasIcon from './icons/CanvasIcon';

const DesignCanvas: React.FC = () => {
  return (
    <Card className="h-full">
      <div className="h-full border-2 border-dashed border-brand-border rounded-lg flex items-center justify-center p-8 bg-brand-bg/50">
        <div className="text-center text-brand-text-secondary">
          <CanvasIcon className="mx-auto h-12 w-12" />
          <h3 className="mt-4 text-sm font-semibold text-brand-text-primary">Visual Design Canvas</h3>
          <p className="mt-1 text-xs">This feature is coming soon.</p>
          <p className="mt-1 text-xs">Drag & drop components to visualize the behavior flow.</p>
        </div>
      </div>
    </Card>
  );
};

export default DesignCanvas;
