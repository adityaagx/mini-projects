let form = document.querySelector("#form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submitBtn");
let resetBtn = document.querySelector("#resetBtn");
let checkValid = document.querySelector("#checkValid");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (username.value === "Aditya" && password.value === "123") {
        checkValid.innerHTML = "Success";
    } else {
        checkValid.innerHTML = "Error";
    }
});

resetBtn.addEventListener("click", () => {
    location.reload();
});
