import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const PurposeScopeCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "The purpose of this project is...",
    "This project is in scope for...",
    "This project is out of scope for...",
  ];

  return (
    <Card title="Purpose and Scope">
      <SuggestedTextarea
        placeholder="Define the purpose and scope of the project..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default PurposeScopeCard;
