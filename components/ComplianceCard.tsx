import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const ComplianceCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "GDPR",
    "CCPA",
    "HIPAA",
  ];

  return (
    <Card title="Compliance">
      <SuggestedTextarea
        placeholder="Detail any compliance requirements..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default ComplianceCard;
