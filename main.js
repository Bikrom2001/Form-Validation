const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

// name filed
const validateName = () => {
  const name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'write full name';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

// phone filed
const validatePhone = () => {
  const phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = 'phone no is required';
    return false;
  }

  if (phone.length !== 11) {
    phoneError.innerHTML = 'phone no should be 11 digits';
    return false;
  }

  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

// Email filed
const validateEmail = () => {
  const email = document.getElementById('contact-email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

// Message field

const validateMessage = () => {
  const message = document.getElementById('contact-message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

const validateForm = () => {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';

    submitError.innerHTML = 'Please Fix Error to Submit';

    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);

    return false;
  }
};
