// Get references to the input fields
let expenseNameInput = document.getElementById("expenseName");
let expenseAmountInput = document.getElementById("amount");
let expenseDateInput = document.getElementById("date");

function addExpense() {
  // Retrieve existing expenses from localStorage or initialize an empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Create a new expense object
  const expense = {
    id: Date.now(),
    name: expenseNameInput.value,
    amount: expenseAmountInput.value,
    date: expenseDateInput.value,
  };

  // Add the new expense to the expenses array
  expenses.push(expense);

  // Store the updated expenses array back into localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseDateInput.value = "";
}
