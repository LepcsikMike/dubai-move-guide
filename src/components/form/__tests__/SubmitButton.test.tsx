
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import SubmitButton from '../SubmitButton';

describe('SubmitButton', () => {
  it('shows loading state when loading prop is true', () => {
    render(<SubmitButton loading={true} />);
    expect(screen.getByText('Wird gesendet...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows default state when loading is false', () => {
    render(<SubmitButton loading={false} />);
    expect(screen.getByText('Kostenlose Beratung anfordern')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
