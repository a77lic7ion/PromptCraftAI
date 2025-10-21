import React, { useState } from 'react';
import Modal from './ui/Modal';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

interface SettingsProps {
    isOpen: boolean;
    onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const [apiEndpoints, setApiEndpoints] = useState({
    gemini: '',
    ollama: '',
    openai: '',
    mistral: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiEndpoints(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real application, you would save these to localStorage or a config file.
    console.log('Saving API Endpoints:', apiEndpoints);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="space-y-6">
        <Card title="API Endpoints">
          <div className="space-y-4 p-4">
            <div>
              <label htmlFor="gemini" className="block text-sm font-medium text-brand-text-secondary">
                Gemini
              </label>
              <Input
                id="gemini"
                name="gemini"
                value={apiEndpoints.gemini}
                onChange={handleChange}
                placeholder="https://api.gemini.com"
              />
            </div>
            <div>
              <label htmlFor="ollama" className="block text-sm font-medium text-brand-text-secondary">
                Ollama
              </label>
              <Input
                id="ollama"
                name="ollama"
                value={apiEndpoints.ollama}
                onChange={handleChange}
                placeholder="http://localhost:11434"
              />
            </div>
            <div>
              <label htmlFor="openai" className="block text-sm font-medium text-brand-text-secondary">
                OpenAI
              </label>
              <Input
                id="openai"
                name="openai"
                value={apiEndpoints.openai}
                onChange={handleChange}
                placeholder="https://api.openai.com/v1"
              />
            </div>
            <div>
              <label htmlFor="mistral" className="block text-sm font-medium text-brand-text-secondary">
                Mistral
              </label>
              <Input
                id="mistral"
                name="mistral"
                value={apiEndpoints.mistral}
                onChange={handleChange}
                placeholder="https://api.mistral.ai/v1"
              />
            </div>
          </div>
        </Card>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
