console.log("JS CONNECTED");

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret number:", randomNumber);

let input = document.getElementById("guessInput");
let button = document.getElementById("guessBtn");
let message = document.getElementById("message");

button.addEventListener("click", function () {
  let userGuess = Number(input.value);

  if (userGuess === randomNumber) {
    message.innerText = "Correct! 🎉";
  } else if (userGuess > randomNumber) {
    message.innerText = "Too High!";
  } else {
    message.innerText = "Too Low!";
  }
});
