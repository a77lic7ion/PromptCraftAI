import React from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { PromptVariable } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import SortableVariableItem from './SortableVariableItem';

interface VariableManagerProps {
  variables: PromptVariable[];
  onVariablesChange: (newVariables: PromptVariable[]) => void;
}

const VariableManager: React.FC<VariableManagerProps> = ({ variables, onVariablesChange }) => {
  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const handleAddVariable = () => {
    const newVariable: PromptVariable = {
      id: `var-${Date.now()}-${Math.random()}`,
      name: '',
      defaultValue: '',
    };
    onVariablesChange([...variables, newVariable]);
  };

  const handleRemoveVariable = (id: string) => {
    onVariablesChange(variables.filter(v => v.id !== id));
  };

  const handleUpdateVariable = (id: string, newVar: Partial<PromptVariable>) => {
    onVariablesChange(variables.map(v => v.id === id ? { ...v, ...newVar } : v));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = variables.findIndex(v => v.id === active.id);
      const newIndex = variables.findIndex(v => v.id === over.id);
      onVariablesChange(arrayMove(variables, oldIndex, newIndex));
    }
  };

  return (
    <Card title="Prompt Variables" className="p-6 sm:p-8">
      <div className="space-y-4">
        <div className="space-y-2">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={variables} strategy={verticalListSortingStrategy}>
                {variables.map(variable => (
                  <SortableVariableItem
                    key={variable.id}
                    variable={variable}
                    onUpdate={handleUpdateVariable}
                    onRemove={handleRemoveVariable}
                  />
                ))}
              </SortableContext>
            </DndContext>
          {variables.length === 0 && (
            <p className="text-sm text-center text-brand-text-secondary py-4">No variables defined. Add one to get started.</p>
          )}
        </div>
        <Button variant="outline" onClick={handleAddVariable} className="w-full">
          + Add Variable
        </Button>
      </div>
    </Card>
  );
};

export default VariableManager;
