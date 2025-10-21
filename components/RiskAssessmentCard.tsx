import React from 'react';
import Card from './ui/Card';

const RiskAssessmentCard: React.FC = () => {
  return (
    <Card title="Risk Assessment">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Outline potential risks and mitigation strategies..."
        rows={4}
      />
    </Card>
  );
};

export default RiskAssessmentCard;
