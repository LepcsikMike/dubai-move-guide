
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import MessageField from '../MessageField';

describe('MessageField', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
  };

  it('renders with the correct label', () => {
    render(<MessageField {...defaultProps} />);
    expect(screen.getByText('Ihre Situation & Fragen')).toBeInTheDocument();
  });

  it('calls onChange handler when text changes', () => {
    const handleChange = vi.fn();
    render(<MessageField {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test message' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays the provided value', () => {
    render(<MessageField value="Test message" onChange={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('Test message');
  });

  it('has the correct placeholder text', () => {
    render(<MessageField {...defaultProps} />);
    expect(screen.getByPlaceholderText('Bitte beschreiben Sie kurz Ihre Situation und spezifische Fragen, die Sie haben.')).toBeInTheDocument();
  });
});
