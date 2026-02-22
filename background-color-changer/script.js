let colorBtn = document.querySelector('#colorBtn');
let resetBtn = document.querySelector('#resetBtn')

colorBtn/addEventListener("click", () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${r} ${g} ${b})`

    document.body.style.backgroundColor = randomColor;
});

resetBtn.addEventListener("click", () => {
    location.reload();
})