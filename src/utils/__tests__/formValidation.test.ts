
import { describe, it, expect } from 'vitest';
import { validateEmail, validateForm } from '../formValidation';

describe('formValidation', () => {
  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('test.name@example.co.uk')).toBe(true);
      expect(validateEmail('test+label@example.com')).toBe(true);
    });

    it('invalidates incorrect email addresses', () => {
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('test@example')).toBe(false);
      expect(validateEmail('test.example.com')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('validates form with correct data', () => {
      expect(validateForm('John Doe', 'john@example.com')).toBe(true);
    });

    it('invalidates form with incorrect data', () => {
      expect(validateForm('', 'john@example.com')).toBe(false);
      expect(validateForm('John Doe', '')).toBe(false);
      expect(validateForm('John Doe', 'invalid-email')).toBe(false);
      expect(validateForm('', '')).toBe(false);
    });
  });
});
