
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MessageArea from '../MessageArea';

describe('MessageArea', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
  };

  it('renders with the correct label', () => {
    render(<MessageArea {...defaultProps} />);
    expect(screen.getByText('Ihre Nachricht')).toBeInTheDocument();
  });

  it('calls onChange handler when text changes', () => {
    const handleChange = vi.fn();
    render(<MessageArea {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test message' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays the provided value', () => {
    render(<MessageArea value="Test message" onChange={vi.fn()} />);
    expect(screen.getByRole('textbox')).toHaveValue('Test message');
  });
});
