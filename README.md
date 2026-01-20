# Expense-Tracker

A simple Expense Tracker web application built using HTML, CSS, and JavaScript that allows users to add, view, and delete expenses while tracking total spending using LocalStorage.

## Problem Statement
Managing daily expenses manually can be difficult and time-consuming.  
This project helps users digitally record their expenses, categorize them, and automatically calculate the total amount spent.

## Features Implemented
- Add expenses with title, amount, and category
- Display expenses dynamically on the page
- Delete individual expenses
- Automatically calculate total expenses
- Store data using LocalStorage
- Input validation with error message display

## DOM Concepts Used
- `document.getElementById()` to access HTML elements
- `document.createElement()` to create expense list items dynamically
- `appendChild()` to add elements to the DOM
- `innerText` to update content dynamically
- Event handling using `onsubmit` and `onclick`
- Dynamic DOM updates on user interaction

## Application Logic
- Expenses are stored in a JavaScript array
- Whenever an expense is added or deleted:
  - The array is updated
  - Data is saved to LocalStorage
  - The UI is re-rendered
- The total expense is recalculated each time the list changes

## Technologies Used
- HTML
- CSS
- JavaScript
- Browser LocalStorage API

## Steps to Run the Project
1. Clone or download the repository
2. Open the `index.html` file in any web browser
3. Enter expense details and click **Add Expense**
4. View expenses and total amount dynamically

## Known Limitations
- No backend or database integration
- Data is stored only in the browser
- Designed for single-user usage

## Author
Mahendra Varanasi  
Batch: 2029
