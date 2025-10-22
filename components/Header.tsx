import React from 'react';
import LogoIcon from './icons/LogoIcon';
import Button from './ui/Button';

interface HeaderProps {
  onSettingsClick: () => void;
  onCreatePbd: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettingsClick, onCreatePbd }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-surface/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <LogoIcon className="h-6 w-6 text-brand-primary" />
          <h1 className="text-lg font-bold text-brand-text-primary">PDB Editor</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="default" onClick={onCreatePbd}>
            CREATE PBD
          </Button>
          <Button variant="outline">
            Share
          </Button>
          <Button variant="ghost" onClick={onSettingsClick}>
            Settings
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
