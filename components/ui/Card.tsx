import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className, title }) => {
  const combinedClassName = `bg-brand-surface/70 backdrop-blur-xl border border-brand-border shadow-2xl shadow-black/20 rounded-xl ${className}`;
  
  return (
    <div className={combinedClassName}>
      {title && <h2 className="text-xl font-semibold text-brand-text-primary mb-6 border-b border-brand-border pb-4">{title}</h2>}
      <div className={title ? '' : 'p-6 sm:p-8'}>
        {children}
      </div>
    </div>
  );
};

export default Card;
