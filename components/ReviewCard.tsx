import React from 'react';
import Card from './ui/Card';

const ReviewCard: React.FC = () => {
  return (
    <Card title="Review and Approval">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Record review comments and approvals..."
        rows={4}
      />
    </Card>
  );
};

export default ReviewCard;
