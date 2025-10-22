import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const ReviewCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "Approved by...",
    "Rejected by...",
    "Needs further review...",
  ];

  return (
    <Card title="Review and Approval">
      <SuggestedTextarea
        placeholder="Record review comments and approvals..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default ReviewCard;
