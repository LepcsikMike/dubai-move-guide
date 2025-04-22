
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import InterestSelect from '../InterestSelect';

describe('InterestSelect', () => {
  const defaultProps = {
    value: 'visum',
    onChange: vi.fn(),
  };

  it('renders all interest options', () => {
    render(<InterestSelect {...defaultProps} />);
    
    expect(screen.getByText('Visum & Aufenthaltsgenehmigung')).toBeInTheDocument();
    expect(screen.getByText('Immobilien & Wohnungssuche')).toBeInTheDocument();
    expect(screen.getByText('Firmengründung & Business Setup')).toBeInTheDocument();
    expect(screen.getByText('Komplettpaket für meinen Umzug')).toBeInTheDocument();
    expect(screen.getByText('Sonstiges')).toBeInTheDocument();
  });

  it('calls onChange handler when selection changes', () => {
    const handleChange = vi.fn();
    render(<InterestSelect {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'immobilien' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays the correct selected value', () => {
    render(<InterestSelect value="immobilien" onChange={vi.fn()} />);
    expect(screen.getByRole('combobox')).toHaveValue('immobilien');
  });
});
