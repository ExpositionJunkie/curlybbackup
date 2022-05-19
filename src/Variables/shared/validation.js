//validates email adapted from https://www.w3resource.com/javascript/form/email-validation.php
export function checkEmail(inputText) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
}

//To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
//adapted from https://www.w3resource.com/javascript/form/password-validation.php
export function checkPassword(inputText) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputText.value.match(passwordRegex)) {
    return true;
  } else {
    return false;
  }
}

//https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/
export const isBetween = (length, min, max) => length < min || length > max ? false : true;

export const isRequired = value => value === '' ? false : true;