// Form validation utilities for registration

export interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  birthdate: string;
  phoneNumber: string;
  address: string;
  barangay: string;
  city: string;
  province: string;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export const validateRegistrationForm = (formData: RegistrationFormData): ValidationResult => {
  const { firstName, lastName, email, password, confirmPassword, phoneNumber, address, barangay, city, province } = formData;

  // Required fields validation
  if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
    return {
      isValid: false,
      errorMessage: 'Please fill in all required fields (First Name, Last Name, Email, Password)'
    };
  }

  if (!phoneNumber.trim() || !address.trim() || !barangay.trim() || !city.trim() || !province.trim()) {
    return {
      isValid: false,
      errorMessage: 'Please fill in all address and contact information'
    };
  }

  if (!email.includes('@')) {
    return {
      isValid: false,
      errorMessage: 'Please enter a valid email address'
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      errorMessage: 'Password must be at least 6 characters long'
    };
  }

  if (password !== confirmPassword) {
    return {
      isValid: false,
      errorMessage: 'Passwords do not match'
    };
  }

  // Phone number validation (basic)
  if (phoneNumber.length < 10) {
    return {
      isValid: false,
      errorMessage: 'Please enter a valid phone number'
    };
  }

  return { isValid: true };
};

// Additional validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  // Basic Philippines phone number validation
  const phoneRegex = /^(\+63|63|0)?[0-9]{10}$/;
  return phoneRegex.test(phoneNumber.replace(/[\s-]/g, ''));
};

export const validatePassword = (password: string): ValidationResult => {
  if (password.length < 6) {
    return {
      isValid: false,
      errorMessage: 'Password must be at least 6 characters long'
    };
  }

  // Optional: Add more password strength validation
  // const hasUpperCase = /[A-Z]/.test(password);
  // const hasLowerCase = /[a-z]/.test(password);
  // const hasNumbers = /\d/.test(password);
  // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return { isValid: true };
};