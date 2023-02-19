const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const key = document.querySelector('#key');
const keyconfirmation = document.querySelector('#keyconfirmation');

const showError = (input, message) => {
  const validation = input.nextElementSibling;
  validation.classList.remove('valid');
  validation.classList.add('invalid');
  const error = validation.nextElementSibling;
  error.innerText = message;
};

const showSuccess = (input) => {
  const validation = input.nextElementSibling;
  validation.classList.remove('invalid');
  validation.classList.add('valid');
  const error = validation.nextElementSibling;
  error.innerText = '';
};

const checkUsername = () => {
  const value = username.value.trim();
  if (value === '') {
    showError(username, 'Rellene este campo');
  } else {
    showSuccess(username);
  }
};

const checkEmail = () => {
  const value = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === '') {
    showError(email, 'Rellene este campo');
  } else if (!regex.test(value)) {
    showError(email, 'Email inválido');
  } else {
    showSuccess(email);
  }
};

const checkKey = () => {
  const value = key.value.trim();
  if (value === '') {
    showError(key, 'Rellene este campo');
  } else if (value.length < 8) {
    showError(key, 'Debe tener más de 8 carácteres');
  } else {
    showSuccess(key);
  }
};

const checkKeyConfirmation = () => {
  const value = keyconfirmation.value.trim();
  if (value === '') {
    showError(keyconfirmation, 'Rellene este campo');
  } else if (value !== key.value.trim()) {
    showError(keyconfirmation, 'Las contraseñas no coinciden');
  } else {
    showSuccess(keyconfirmation);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkKey();
  checkKeyConfirmation();
  alert("Formulario enviado correctamente");
});

username.addEventListener('blur', checkUsername);
email.addEventListener('blur', checkEmail);
key.addEventListener('blur', checkKey);
keyconfirmation.addEventListener('blur', checkKeyConfirmation);