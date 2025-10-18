import { EMAIL_REGEX } from './constants';

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {Object} Validation result {isValid: boolean, error: string}
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return {
      isValid: false,
      error: 'Email is required'
    };
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return {
      isValid: false,
      error: 'Please enter a valid email address'
    };
  }
  
  return {
    isValid: true,
    error: ''
  };
};
