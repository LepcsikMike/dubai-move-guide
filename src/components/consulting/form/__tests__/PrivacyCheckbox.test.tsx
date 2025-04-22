
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PrivacyCheckbox from '../PrivacyCheckbox';

describe('PrivacyCheckbox', () => {
  const renderWithRouter = () => {
    return render(
      <BrowserRouter>
        <PrivacyCheckbox />
      </BrowserRouter>
    );
  };

  it('renders with the correct privacy text', () => {
    renderWithRouter();
    expect(screen.getByText(/Ich stimme der/)).toBeInTheDocument();
    expect(screen.getByText('Datenschutzerklärung')).toBeInTheDocument();
  });

  it('renders a checkbox input that is required', () => {
    renderWithRouter();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('required');
  });

  it('privacy policy link has correct href', () => {
    renderWithRouter();
    const link = screen.getByText('Datenschutzerklärung');
    expect(link).toHaveAttribute('href', '/datenschutz');
  });

  it('checkbox can be checked and unchecked', () => {
    renderWithRouter();
    const checkbox = screen.getByRole('checkbox');
    
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
