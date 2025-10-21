import React from 'react';
import Card from './ui/Card';

const ProjectOverviewCard: React.FC = () => {
  return (
    <Card title="Project Overview">
      <textarea
        className="w-full p-2 border rounded bg-brand-surface border-brand-border"
        placeholder="Provide a brief overview of the project..."
        rows={4}
      />
    </Card>
  );
};

export default ProjectOverviewCard;
