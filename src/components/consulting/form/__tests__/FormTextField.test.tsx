
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import FormTextField from '../FormTextField';

describe('FormTextField', () => {
  const defaultProps = {
    id: 'test-field',
    name: 'test',
    label: 'Test Field',
    value: '',
    onChange: vi.fn(),
  };

  it('renders with the correct label', () => {
    render(<FormTextField {...defaultProps} />);
    expect(screen.getByText('Test Field')).toBeInTheDocument();
  });

  it('shows required asterisk when required prop is true', () => {
    render(<FormTextField {...defaultProps} required={true} />);
    expect(screen.getByText('Test Field *')).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const handleChange = vi.fn();
    render(<FormTextField {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('uses correct input type when specified', () => {
    render(<FormTextField {...defaultProps} type="email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('applies focus ring styles on focus', () => {
    render(<FormTextField {...defaultProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('focus:ring-2', 'focus:ring-dubai-gold');
  });
});
