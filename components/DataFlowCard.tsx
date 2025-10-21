import React from 'react';
import Card from './ui/Card';

const DataFlowCard: React.FC = () => {
  return (
    <Card title="Data Flow">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Describe the data flow within the system..."
        rows={4}
      />
    </Card>
  );
};

export default DataFlowCard;
