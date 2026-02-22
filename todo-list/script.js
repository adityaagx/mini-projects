let form = document.querySelector("#todoForm");
let input = document.querySelector("#todoInput");
let todoList = document.querySelector("#todoList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let taskText = input.value.trim();

    if (taskText === "") return;

    // Create list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed on click
    li.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value = "";
});
