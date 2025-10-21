import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PreviewPaneProps {
  content: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ content }) => {
  return (
    <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-brand-text-primary prose-p:text-brand-text-secondary prose-li:text-brand-text-secondary prose-strong:text-brand-text-primary">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default PreviewPane;
