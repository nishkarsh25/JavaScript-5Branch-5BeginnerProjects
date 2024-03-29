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

  function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
      wrng.innerHTML = "Enter Between 1 to 100";
    } else {
      numGuesses++;
      guesses.innerHTML = "No. of Guess : " + numGuesses;
      if (input.value > answer) {
        wrng.innerHTML = "You guessed too high!";
        input.value="";
      } else if (input.value < answer) {
        wrng.innerHTML = "You guessed too low!";
        input.value="";
      } else {
        wrng.innerHTML = "Congratulations! You guessed the correct number in " + numGuesses + " guesses!";
        btn.disabled = true;
        setTimeout(()=>{
          resetGame();
        },5000)
  
      }
    }
  }