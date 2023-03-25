const inputString = document.getElementById('validation-input');

inputString.addEventListener('blur', () => {
  inputString.value.length === +inputString.dataset.length
    ? (inputString.className = 'valid')
    : (inputString.className = 'invalid');
});
