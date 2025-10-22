import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const PbdPrinciplesCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "Data minimization",
    "Purpose limitation",
    "Security by design",
  ];

  return (
    <Card title="PBD Principles">
      <SuggestedTextarea
        placeholder="List the key principles of the project..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default PbdPrinciplesCard;
