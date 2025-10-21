import React from 'react';
import Card from './ui/Card';

const ComplianceCard: React.FC = () => {
  return (
    <Card title="Compliance">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Detail any compliance requirements..."
        rows={4}
      />
    </Card>
  );
};

export default ComplianceCard;
