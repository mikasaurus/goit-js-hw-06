const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  const message = 'Please fill in the form to log in!';
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert(message);
  } else {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  }
});
