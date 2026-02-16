let input = document.querySelector('#input');
let toggleBtn = document.querySelector('#toggleBtn');
let resetBtn = document.querySelector('#resetBtn');

toggleBtn.addEventListener("click", () => {
    if(input.type === "password"){
        input.type = "text";
        toggleBtn.innerHTML = "Hide";
    } else {
        input.type = "password";
        toggleBtn = "Show";
    }
});

resetBtn.addEventListener("click", () => {
    location.reload();
})