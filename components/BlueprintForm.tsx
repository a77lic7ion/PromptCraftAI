import React from 'react';
import { BehaviorDefinition } from '../types';
import Card from './ui/Card';
import TemplateEditor from './TemplateEditor';

interface BlueprintFormProps {
  behavior: BehaviorDefinition;
  onBehaviorChange: (newBehavior: BehaviorDefinition) => void;
}

const BlueprintForm: React.FC<BlueprintFormProps> = ({ behavior, onBehaviorChange }) => {
  const handleChange = (field: keyof BehaviorDefinition, value: string) => {
    onBehaviorChange({ ...behavior, [field]: value });
  };

  return (
    <Card title="Behavior Blueprint" className="p-6 sm:p-8">
      <div className="space-y-6">
        <TemplateEditor
          label="Pre-conditions"
          placeholder="e.g., User is logged in. The shopping cart is not empty."
          value={behavior.preconditions}
          onChange={(e) => handleChange('preconditions', e.target.value)}
          rows={4}
        />
        <TemplateEditor
          label="Actions"
          placeholder="e.g., User clicks the 'Checkout' button. System processes the payment."
          value={behavior.actions}
          onChange={(e) => handleChange('actions', e.target.value)}
          rows={6}
        />
        <TemplateEditor
          label="Post-conditions"
          placeholder="e.g., An order confirmation is displayed. The shopping cart is empty."
          value={behavior.postconditions}
          onChange={(e) => handleChange('postconditions', e.target.value)}
          rows={4}
        />
      </div>
    </Card>
  );
};

export default BlueprintForm;
