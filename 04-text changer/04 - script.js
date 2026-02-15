let text = document.querySelector('#text');
let changeBtn = document.querySelector('#changeBtn');
let resetBtn = document.querySelector('#resetBtn');

changeBtn.addEventListener("click", () => {
    text.innerHTML = "Bye World"
});

resetBtn.addEventListener("click", () => {
    location.reload();
});

