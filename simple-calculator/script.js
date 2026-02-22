let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');

let addBtn = document.querySelector('#addBtn');
let subBtn = document.querySelector('#subBtn');
let mulBtn = document.querySelector('#mulBtn');
let divBtn = document.querySelector('#divBtn');

let result = document.querySelector('#result');
let resetBtn = document.querySelector('#resetBtn')

addBtn.addEventListener("click", function(){
  let sum = Number(num1.value) + Number(num2.value);
  result.innerText = "Result : " + sum;
});

subBtn.addEventListener("click", function(){
  let diff = Number(num1.value) - Number(num2.value);
  result.innerText = "Result : " + diff;
});

mulBtn.addEventListener("click", function(){
  let mul = Number(num1.value) * Number(num2.value);
  result.innerText = "Result : " + mul;
});

divBtn.addEventListener("click", function(){
  let div = Number(num1.value) / Number(num2.value);
  result.innerText = "Result : " + div;
});

resetBtn.addEventListener("click", function(){
  location.reload()
});
