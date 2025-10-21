import React from 'react';
import Card from './ui/Card';

const PurposeScopeCard: React.FC = () => {
  return (
    <Card title="Purpose and Scope">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Define the purpose and scope of the project..."
        rows={4}
      />
    </Card>
  );
};

export default PurposeScopeCard;
