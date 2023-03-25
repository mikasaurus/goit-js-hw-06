const inputName = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const inputValue = inputName.value;

  if (inputValue === '') {
    output.textContent = 'Anymous';
  } else {
    output.textContent = inputValue;
  }
});
