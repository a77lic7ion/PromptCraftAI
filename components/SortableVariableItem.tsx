import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PromptVariable } from '../types';
import Input from './ui/Input';
import Button from './ui/Button';
import DragHandleIcon from './icons/DragHandleIcon';

interface SortableVariableItemProps {
  variable: PromptVariable;
  onUpdate: (id: string, newVar: Partial<PromptVariable>) => void;
  onRemove: (id:string) => void;
}

const SortableVariableItem: React.FC<SortableVariableItemProps> = ({ variable, onUpdate, onRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: variable.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 'auto',
    opacity: isDragging ? 0.5 : 1,
  };
  
  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2 bg-brand-surface/50 p-2 rounded-md border border-brand-border">
      <button {...attributes} {...listeners} className="p-1 text-brand-text-secondary hover:text-brand-text-primary cursor-grab focus:outline-none focus:ring-2 focus:ring-brand-primary rounded">
        <DragHandleIcon className="h-5 w-5" />
      </button>
      <div className="grid grid-cols-2 gap-2 flex-grow">
        <Input
          placeholder="Variable Name"
          value={variable.name}
          onChange={(e) => onUpdate(variable.id, { name: e.target.value })}
        />
        <Input
          placeholder="Default Value"
          value={variable.defaultValue}
          onChange={(e) => onUpdate(variable.id, { defaultValue: e.target.value })}
        />
      </div>
      <Button variant="ghost" size="icon" onClick={() => onRemove(variable.id)} className="h-8 w-8 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
    </div>
  );
};

export default SortableVariableItem;
