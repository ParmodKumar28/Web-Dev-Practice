// Get references to the input fields
let expenseNameInput = document.getElementById("expenseName");
let expenseAmountInput = document.getElementById("amount");
let expenseDateInput = document.getElementById("date");
let expenseListUl = document.getElementById("expenseList");
let totalAmountSpan = document.getElementById("totalAmount");

function addExpense() {
  // Retrieve existing expenses from localStorage or initialize an empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Create a new expense object
  const expense = {
    id: Date.now(),
    name: expenseNameInput.value,
    amount: parseFloat(expenseAmountInput.value),
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
  displayExpenses();
}

// Displaying the expense details here
function displayExpenses() {
  // Getting expenses
  let expenses = JSON.parse(localStorage.getItem("expenses"));

  // Creating Li
  let expenseLi = document.createElement("li");
  

  // Total
  let total = 0;

  if (expenses.length > 0) {
    expenses.forEach((expense) => {
      // Setting total
      total += expense.amount;

      // Adding li data
      expenseLi.id = expense.id;
      expenseLi.innerHTML = `
      <span class="expense-name"></span>${expense.name}<span
      class="expense-amount"
    >${expense.amount}</span>
   ${expense.date}<span class="expense-date"></span>
    <button onclick="removeExpense(event)">Remove</button>
      `;
    });

    // Appending to the expenses ul list here
    expenseListUl.append(expenseLi);
  }

  // Adding total
  totalAmountSpan.textContent = parseFloat(total);
}
