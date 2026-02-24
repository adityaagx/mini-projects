// ===============================
// SELECT DOM ELEMENTS
// ===============================
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addBtn = document.getElementById("add-btn");
const expenseList = document.getElementById("expense-items");
const totalAmount = document.getElementById("total-amount");

// ===============================
// STATE
// ===============================
let expenses = [];

// ===============================
// LOAD DATA FROM LOCAL STORAGE
// ===============================
function loadFromLocalStorage() {
  const savedExpenses = localStorage.getItem("expenses");

  if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
    renderExpenses();
  }
}

// ===============================
// SAVE DATA TO LOCAL STORAGE
// ===============================
function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// ===============================
// ADD EXPENSE
// ===============================
function addExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value);

  // Validation
  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  const expense = {
    id: Date.now(),
    name,
    amount,
  };

  expenses.push(expense);

  saveToLocalStorage();
  renderExpenses();

  // Clear inputs
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
}

// ===============================
// DELETE EXPENSE
// ===============================
function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);

  saveToLocalStorage();
  renderExpenses();
}

// ===============================
// CALCULATE TOTAL
// ===============================
function calculateTotal() {
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  totalAmount.textContent = total.toFixed(2);
}

// ===============================
// RENDER EXPENSES
// ===============================
function renderExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    expenseList.innerHTML = "<p>No expenses added yet.</p>";
    totalAmount.textContent = "0";
    return;
  }

  expenses.forEach(expense => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${expense.name} - ₹${expense.amount.toFixed(2)}</span>
      <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;

    expenseList.appendChild(li);
  });

  calculateTotal();
}

// ===============================
// EVENT LISTENERS
// ===============================
addBtn.addEventListener("click", addExpense);

// Load saved data when page loads
loadFromLocalStorage();