
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import PrivacyNotice from '../PrivacyNotice';

describe('PrivacyNotice', () => {
  it('renders privacy notice with correct link', () => {
    render(
      <BrowserRouter>
        <PrivacyNotice />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/Ihre Daten werden gemäß unserer/)).toBeInTheDocument();
    const privacyLink = screen.getByRole('link');
    expect(privacyLink).toHaveAttribute('href', '/datenschutz');
  });
});
