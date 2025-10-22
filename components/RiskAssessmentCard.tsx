import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const RiskAssessmentCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "Data breach",
    "Unauthorized access",
    "Data loss",
  ];

  return (
    <Card title="Risk Assessment">
      <SuggestedTextarea
        placeholder="Outline potential risks and mitigation strategies..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default RiskAssessmentCard;
