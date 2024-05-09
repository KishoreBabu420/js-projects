'use strict';

//selecting elements
const firstNameInputEl = document.querySelector('#firstName');
const lastNameInputEl = document.querySelector('#lastName');
const emailInputEl = document.getElementById('email');
const mobileInputEl = document.getElementById('mobile');
const passwordInputEl = document.getElementById('password');
const confirmPasswordInputEl = document.getElementById('confirm-password');

const inputElements = [
  firstNameInputEl,
  lastNameInputEl,
  emailInputEl,
  mobileInputEl,
  passwordInputEl,
  confirmPasswordInputEl,
];

//functions (utilities, helpers)
function showError(element, message) {
  element.className = 'form-input error';
  const formControl = element.parentElement;

  const messageEl = formControl.querySelector('.message');
  messageEl.classList.add('error');
  messageEl.innerText = message;
}

function showSuccess(element) {
  element.className = 'form-input success';
  const formControl = element.parentElement;
  const messageEl = formControl.querySelector('.message');
  messageEl.classList.remove('error');
}

//check Mandatory
function checkMandatory(arrElements) {
  for (let i = 0; i < arrElements.length; i++) {
    if (!arrElements[i].value) {
      showError(arrElements[i], `${arrElements[i].name} is Mandatory`);
    } else {
      showSuccess(arrElements[i]);
    }
  }
}

//check length
function checkLength(element, minLength, maxLength) {
  const value = element.value;
  const name = element.name;
  if (value.length < minLength) {
    showError(element, `${name} should be more than ${minLength} characters`);
  } else if (value.length > maxLength) {
    showError(element, `${name} should be less than ${maxLength} characters`);
  } else {
    showSuccess(element);
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const validateMobile = (mobile) => {
  return String(mobile).match(/^[6789]\d{9}$/);
};

//check email
function checkEmail(element) {
  const value = element.value;

  if (!validateEmail(value)) {
    showError(element, 'Enter valid email address');
  } else {
    showSuccess(element);
  }
}

function checkMobile(element) {
  const value = element.value;

  if (!validateMobile(value)) {
    showError(element, 'Enter valid Mobile number');
  } else {
    showSuccess(element);
  }
}

const userForm = document.getElementById('user-form');

//defining event listeners
userForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = firstNameInputEl.value;
  const lastName = lastNameInputEl.value;
  const email = emailInputEl.value;
  const mobile = mobileInputEl.value;
  const password = passwordInputEl.value;
  const confirmPassword = confirmPasswordInputEl.value;

  checkMandatory(inputElements);

  //check length
  checkLength(firstNameInputEl, 4, 16);
  checkLength(lastNameInputEl, 4, 16);

  //check email format
  checkEmail(emailInputEl);

  //check Mobile
  checkMobile(mobileInputEl);

  if (password !== confirmPassword) {
    showError(confirmPasswordInputEl, 'Both the passwords should match');
  } else {
    showSuccess(confirmPasswordInputEl);
  }
});

//check mandatory
//Check length for firstName & lastName (4, 12)
//check for correct email format (abc@domain.com)
//check for proper formatted mobile number (10 digits (6,7,8,9))
//check for password format
//check for password is same as confirm password
