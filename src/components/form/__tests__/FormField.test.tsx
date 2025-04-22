
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FormField from '../FormField';
import { Mail } from 'lucide-react';

describe('FormField', () => {
  const defaultProps = {
    id: 'test-field',
    name: 'test',
    label: 'Test Field',
    value: '',
    onChange: vi.fn(),
  };

  it('renders with required label when required prop is true', () => {
    render(<FormField {...defaultProps} required={true} />);
    expect(screen.getByText('Test Field *')).toBeInTheDocument();
  });

  it('displays error message when provided', () => {
    render(<FormField {...defaultProps} error="This field has an error" />);
    expect(screen.getByText('This field has an error')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<FormField {...defaultProps} Icon={Mail} />);
    expect(screen.getByTestId('form-field-icon')).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<FormField {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
