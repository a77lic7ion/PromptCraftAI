import React, { useState } from 'react';
import { BehaviorDefinition, PromptVariable } from '../types';
import { generateContent } from '../services/geminiService';
import Card from './ui/Card';
import Button from './ui/Button';
import PreviewPane from './PreviewPane';

interface AiAssistantProps {
  behavior: BehaviorDefinition;
  variables: PromptVariable[];
  onGenerate: (prompt: string) => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ behavior, variables }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGenerateClick = async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent('');
    try {
      const result = await generateContent(behavior, variables);
      setGeneratedContent(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="sticky top-24">
      <div className="p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-semibold text-brand-text-primary">AI Assistant</h2>
        <p className="text-sm text-brand-text-secondary">
          Once you've defined the behavior and variables, the AI can generate test cases, documentation, or code snippets.
        </p>
        <Button onClick={handleGenerateClick} disabled={isLoading} className="w-full">
          {isLoading ? 'Generating...' : 'Generate with AI'}
        </Button>
        
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        
        {(generatedContent || isLoading) && (
          <div className="mt-6 pt-4 border-t border-brand-border">
             <h3 className="text-lg font-semibold text-brand-text-primary mb-2">Generated Output</h3>
            {isLoading && !generatedContent && (
              <div className="space-y-2 animate-pulse">
                <div className="h-4 bg-brand-surface rounded w-3/4"></div>
                <div className="h-4 bg-brand-surface rounded w-1/2"></div>
                <div className="h-4 bg-brand-surface rounded w-5/6"></div>
              </div>
            )}
            {generatedContent && <PreviewPane content={generatedContent} />}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AiAssistant;
