let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;