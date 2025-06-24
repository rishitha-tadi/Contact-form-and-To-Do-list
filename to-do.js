  const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completeMessage = document.getElementById("complete-message");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // Add delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // ×
    li.appendChild(span);

    // Append task to list
    listContainer.appendChild(li);

    // Add events to the new task
    attachEvents(li);

    // Clear input
    inputBox.value = "";

    // Save and check
    saveTasks();
    checkAllCompleted();
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Check if all tasks are completed or list is empty
function checkAllCompleted() {
  const tasks = listContainer.querySelectorAll("li");
  const allChecked = tasks.length > 0 && Array.from(tasks).every(li => li.classList.contains("checked"));
  if (tasks.length === 0 || allChecked) {
    completeMessage.style.display = "block";
  } else {
    completeMessage.style.display = "none";
  }
}

// Add click and delete events to a task
function attachEvents(li) {
  li.addEventListener("click", function () {
    li.classList.toggle("checked");
    saveTasks();
    checkAllCompleted();
  });

  li.querySelector("span").addEventListener("click", function () {
    li.remove();
    saveTasks();
    checkAllCompleted();
  });
}

// Load tasks on page load
window.onload = () => {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";
  listContainer.querySelectorAll("li").forEach((li) => {
    attachEvents(li);
  });
  checkAllCompleted();
};

// Add task on Enter key
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
