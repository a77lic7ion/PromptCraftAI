import React from 'react';
import Card from './ui/Card';
import SuggestedTextarea from './ui/SuggestedTextArea';

const DataFlowCard: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; }> = ({ value, onChange }) => {
  const suggestions = [
    "User data is sent from the client to the server...",
    "The server processes the data and stores it in the database...",
    "Data is retrieved from the database and sent to the client...",
  ];

  return (
    <Card title="Data Flow">
      <SuggestedTextarea
        placeholder="Describe the data flow within the system..."
        rows={4}
        value={value}
        onChange={onChange}
        suggestions={suggestions}
      />
    </Card>
  );
};

export default DataFlowCard;
