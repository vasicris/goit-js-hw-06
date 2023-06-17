const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let value = 0;

function updateCounter() {
  counterValue.insertAdjacentHTML("beforeend", value);
}

function increment() {
  value += 1;
  counterValue.innerHTML = "";
  updateCounter();
}

function decrement() {
  value -= 1;
  counterValue.innerHTML = "";
  updateCounter();
}

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

updateCounter();