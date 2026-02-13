let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)

let input = document.getElementbyId("guessInput");
let button = document.getElementbyId("button");
let message = document.getElementsbyId("message");

button.addEventListener("click", function () {
  let userGuess = Number(input.value);

  if (userGuess === randomNumber) {
    message.innerText = "Correct! 🎉";
  } else if (userGuess > randomNumber) {
    message.innerText = "Too high!";
  } else {
    message.innerText = "Too low!";
  }
});

