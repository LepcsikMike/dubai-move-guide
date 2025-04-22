
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateForm = (name: string, email: string): boolean => {
  return name.trim() !== '' && email.trim() !== '' && validateEmail(email);
};
