// Get saved expenses from localStorage or start with an empty array
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Function to show all expenses on the page
function showExpenses() {
    const list = document.getElementById("expenseList");
    const totalText = document.getElementById("totalAmount");

    // Clear the previous list
    list.innerHTML = "";
    let total = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {
        const li = document.createElement("li");

        // Show expense title, category, and amount
        li.innerText =
            expenses[i].title +
            " (" +
            expenses[i].category +
            ") ₹" +
            expenses[i].amount;

        // Create delete button
        const del = document.createElement("button");
        del.innerText = "X";
        del.className = "delete-btn";

        // Remove expense when delete button is clicked
        del.onclick = function () {
            expenses.splice(i, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            showExpenses();
        };

        li.appendChild(del);
        list.appendChild(li);

        // Add amount to total
        total += expenses[i].amount;
    }

    // Display total expense amount
    totalText.innerText = total;
}

// Handle form submission to add a new expense
document.getElementById("expenseForm").onsubmit = function (e) {
    e.preventDefault(); // Prevent page reload

    const title = document.getElementById("expenseTitle").value.trim();
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;
    const error = document.getElementById("errorMessage");

    // Check if inputs are valid
    if (title === "" || amount <= 0 || category === "") {
        error.classList.remove("hidden");
        return;
    }

    error.classList.add("hidden");

    // Add expense to the array
    expenses.push({
        title: title,
        amount: amount,
        category: category
    });

    // Save updated expenses to localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
    showExpenses();

    // Clear input fields after submission
    document.getElementById("expenseTitle").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
};

// Display expenses when the page loads
showExpenses();
