import React from 'react';
import Modal from './ui/Modal';

interface SettingsProps {
    isOpen: boolean;
    onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="space-y-4">
        <p className="text-sm text-brand-text-secondary">
          This is a placeholder for application settings.
        </p>
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-brand-text-secondary">
            API Key
          </label>
          <div className="mt-1">
            <p className="text-xs text-brand-text-secondary">
              The Gemini API key is configured via environment variables and cannot be changed here.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
