import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const ProjectOverviewCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "This project aims to...",
    "The goal of this project is to...",
    "We are building a...",
  ];

  return (
    <Card title="Project Overview">
      <SuggestedTextarea
        placeholder="Provide a brief overview of the project..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default ProjectOverviewCard;
