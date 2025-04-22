
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import ServiceTypeSelect from '../ServiceTypeSelect';

describe('ServiceTypeSelect', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
  };

  it('renders with the correct label', () => {
    render(<ServiceTypeSelect {...defaultProps} />);
    expect(screen.getByText('Beratungstyp *')).toBeInTheDocument();
  });

  it('renders all service type options', () => {
    render(<ServiceTypeSelect {...defaultProps} />);
    
    expect(screen.getByText('Beratungstyp auswählen')).toBeInTheDocument();
    expect(screen.getByText('Visum & Umzug Beratung')).toBeInTheDocument();
    expect(screen.getByText('Immobilien & Wohnungssuche')).toBeInTheDocument();
    expect(screen.getByText('Unternehmensaufbau Beratung')).toBeInTheDocument();
    expect(screen.getByText('Umfassendes Umzugspaket')).toBeInTheDocument();
  });

  it('calls onChange handler when selection changes', () => {
    const handleChange = vi.fn();
    render(<ServiceTypeSelect {...defaultProps} onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'visa' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays the selected value', () => {
    render(<ServiceTypeSelect value="housing" onChange={vi.fn()} />);
    expect(screen.getByRole('combobox')).toHaveValue('housing');
  });
});
