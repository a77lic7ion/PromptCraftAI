import React, { useState } from 'react';
import Header from './components/Header';
import BlueprintForm from './components/BlueprintForm';
import VariableManager from './components/VariableManager';
import AiAssistant from './components/AiAssistant';
import DesignCanvas from './components/DesignCanvas';
import { BehaviorDefinition, PromptVariable } from './types';
import Settings from './components/Settings';

function App() {
  const [behavior, setBehavior] = useState<BehaviorDefinition>({
    preconditions: '',
    actions: '',
    postconditions: '',
  });
  const [variables, setVariables] = useState<PromptVariable[]>([]);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // The AI generation logic is handled within the AiAssistant component.
  // This function is kept as a placeholder in case of future top-level interactions.
  const handleGenerate = (prompt: string) => {
    console.log('Generating with prompt from App:', prompt);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-primary font-sans antialiased">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            <BlueprintForm behavior={behavior} onBehaviorChange={setBehavior} />
            <VariableManager variables={variables} onVariablesChange={setVariables} />
          </div>
          
          {/* Middle Column */}
          <div className="lg:col-span-5 space-y-8">
            <DesignCanvas />
          </div>

          {/* Right Column (AI Assistant) */}
          <div className="lg:col-span-3">
             <AiAssistant
                behavior={behavior}
                variables={variables}
                onGenerate={handleGenerate}
              />
          </div>
        </div>
      </main>
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
}

export default App;
