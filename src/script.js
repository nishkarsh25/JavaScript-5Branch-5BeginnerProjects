let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

btn.addEventListener("click", () => {
    guessNumber();
  });
  
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      guessNumber();
    }
  });