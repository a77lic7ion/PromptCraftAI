import React from 'react';
import Textarea, { TextareaProps } from './ui/Textarea';

interface TemplateEditorProps extends TextareaProps {
  label: string;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({ label, ...props }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none text-brand-text-secondary">
        {label}
      </label>
      <Textarea {...props} />
    </div>
  );
};

export default TemplateEditor;
