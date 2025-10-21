import React from 'react';
import Card from './ui/Card';

const PbdPrinciplesCard: React.FC = () => {
  return (
    <Card title="PBD Principles">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="List the key principles of the project..."
        rows={4}
      />
    </Card>
  );
};

export default PbdPrinciplesCard;
