const emailValidation = (email) => {
  const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
  return isEmailValid;
};

const passwordValidation = (password) => {
  const MINIMUM_PASSOWRD_LENGTH = 4;
  const isPasswordValid = password.length > MINIMUM_PASSOWRD_LENGTH;
  return isPasswordValid;
};

const nameValidation = (name) => {
  const MINIMUM_NAME_LENGTH = 6;
  const isNameValid = name.length >= MINIMUM_NAME_LENGTH && /^[A-Za-z'\s]+$/.test(name);
  return isNameValid;
};

const isPasswordValid = (password, confirm) => {
  if (password === confirm) return true;
  return false;
};

const cepValidation = (cep) => {
  const isEmailValid = /\d{5}-\d{3}/.test(cep);
  return isEmailValid;
};

module.exports = {
  emailValidation,
  passwordValidation,
  nameValidation,
  isPasswordValid,
  cepValidation,
};
