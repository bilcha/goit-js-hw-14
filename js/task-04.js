let counterValue = 0;

const output = document.querySelector('#value');

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

function updateCounterOutput(event) {
  counterValue = counterValue + parseInt(event.target.innerText);
  output.innerHTML = counterValue;
}

decrementButton.addEventListener("click", updateCounterOutput);
incrementButton.addEventListener("click", updateCounterOutput);