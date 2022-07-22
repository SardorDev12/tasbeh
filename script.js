let number = document.querySelector(".number");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const modal = document.querySelector(".modal");
const zikr = document.querySelector(".zikr");
const sayZikr = document.querySelector(".say-zikr");
const zikrs = ["SubhanAlloh", "Alhamdulillah", "Allohu Akbar"];

let turn = 0;
let counter = 0;

/********* FUNCTIONS ***********/
// Increment counter
function increment() {
  counter++;
  number.textContent = counter;
}

// Reset counter
function resetCounter() {
  counter = 0;
  number.textContent = counter;
}

/*********** EVENTS **********/
// modal open-close
start.addEventListener("click", () => {
  modal.classList.toggle("active");
});

// start over
reset.addEventListener("click", () => {
  counter = 0;
  turn = 0;
  number.textContent = counter;
  sayZikr.textContent = zikrs[0];
});

// increment counter

sayZikr.addEventListener("click", () => {
  turn++;
  increment();
  if (turn == 4) {
    resetCounter();
    sayZikr.textContent = zikrs[1];
  } else if (turn == 8) {
    resetCounter();
    sayZikr.textContent = zikrs[2];
  } else if (turn == 12) {
    resetCounter();
    turn = 0;
    sayZikr.textContent = zikrs[0];
  }
});
