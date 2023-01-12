// Get the form, list, and clear button elements
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");
const clearButton = document.getElementById("clear-button");

// Get the saved list from local storage
const savedList = localStorage.getItem('todo-list');

// If there is a saved list, update the list on the page
if (savedList) {
  list.innerHTML = savedList;
}

// Add a task to the list
form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Get the task input
  const task = document.getElementById("task").value;

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = task;

  // Add the list item to the to-do list
  list.appendChild(li);

  // Save the list to local storage
  localStorage.setItem('todo-list', list.innerHTML);
  
  // Clear the task input
  document.getElementById("task").value = "";
});

// Clear the list and local storage
clearButton.addEventListener("click", function() {
  list.innerHTML = "";
  localStorage.removeItem('todo-list');
});

// Add event listener for clicks on the list items
list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});
