export const sanitizeInput = (input) => {
  // Remove any script tags and their content
  let sanitized = input.replace(/<script.*?>.*?<\/script>/gi, "");

  // Remove event handlers like onClick, onMouseOver, etc.
  sanitized = sanitized.replace(/on\w+=".*?"/gi, "");

  // Remove potentially dangerous HTML tags (e.g., iframe, object, embed)
  sanitized = sanitized.replace(/<(iframe|object|embed).*?>.*?<\/\1>/gi, "");

  // Encode HTML entities to prevent injection attacks
  sanitized = sanitized.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Strip out any remaining dangerous characters like quotes or backticks
  sanitized = sanitized.replace(/["'`]/g, "");

  // Trim any remaining whitespace

  return sanitized;
};
export const validate = (input) => {
  const errors = {
    email: { isValid: true, message: "" },
    phone: { isValid: true, message: "" },
    requiredField1: { isValid: true, message: "" },
    requiredField2: { isValid: true, message: "" },
  };

  // Validate email
  if (!input.email) {
    errors.email.isValid = false;
    errors.email.message = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email.isValid = false;
    errors.email.message = "Invalid email format";
  }

  // Validate phone
  if (!input.phone) {
    errors.phone.isValid = false;
    errors.phone.message = "Phone is required";
  } else if (!/^\+?[0-9]{0,12}$/.test(input.phone)) {
    errors.phone.isValid = false;
    errors.phone.message = "Invalid phone format";
  }

  // Validate required fields
  if (!input.requiredField1) {
    errors.requiredField1.isValid = false;
    errors.requiredField1.message = "Required field 1 is missing";
  }
  if (!input.requiredField2) {
    errors.requiredField2.isValid = false;
    errors.requiredField2.message = "Required field 2 is missing";
  }
  // Add more required field validations if needed

  return errors;
};
export const validateInput = (name, value, setFormState, formContent) => {
  let isValid = true;
  let errorMessage = "";

  if (name === "phone") {
    const phoneRegex = /^\+?\d{6,13}$/;
    isValid = phoneRegex.test(value);
    if (!isValid) errorMessage = formContent?.errorMessages.phone;
  } else if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailRegex.test(value);
    if (!isValid) errorMessage = formContent?.errorMessages.email;
  } else if (!value.trim()) {
    isValid = false;
    errorMessage = formContent.errorMessages.required;
  }

  setFormState((prevState) => ({
    ...prevState,
    [name]: { value, isValid, errorMessage },
  }));

  return isValid;
};
