let countDisplay = document.querySelector('#count');

let increaseBtn = document.querySelector('#increaseBtn');
let decreaseBtn = document.querySelector('#decreaseBtn');
let resetBtn = document.querySelector('#resetBtn');

let count = 0

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerHTML = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
    location.reload();
});


