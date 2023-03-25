let counterValue = 0;
let value = document.querySelector('#value');

let decrement = document.querySelector("button[data-action = 'decrement']");
decrement.addEventListener('click', e => {
  counterValue--;
  value.innerHTML = counterValue;
});

let increment = document.querySelector("button[data-action = 'increment']");
increment.addEventListener('click', e => {
  counterValue++;
  value.innerHTML = counterValue;
});
