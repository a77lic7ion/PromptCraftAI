import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="p-4 border rounded">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;
