import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Settings from '../components/Settings';

describe('Settings', () => {
  it('renders the settings modal with API endpoint inputs', () => {
    render(<Settings isOpen={true} onClose={() => {}} />);

    expect(screen.getByLabelText('Gemini')).toBeInTheDocument();
    expect(screen.getByLabelText('Ollama')).toBeInTheDocument();
    expect(screen.getByLabelText('OpenAI')).toBeInTheDocument();
    expect(screen.getByLabelText('Mistral')).toBeInTheDocument();
  });

  it('allows updating the API endpoint values', () => {
    render(<Settings isOpen={true} onClose={() => {}} />);

    const geminiInput = screen.getByLabelText('Gemini');
    fireEvent.change(geminiInput, { target: { value: 'https://new-gemini-url.com' } });
    expect(geminiInput.value).toBe('https://new-gemini-url.com');
  });
});
