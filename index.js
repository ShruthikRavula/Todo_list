// Define an array to store tasks.
let tasks = [];

// Function to add a new task.
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        tasks.push({ text: taskText, completed: false });
        displayTasks();
        taskInput.value = "";
    }
}

// Function to display tasks in the list.
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox" onchange="markCompleted(${index})" ${task.completed ? "checked" : ""}>
            ${task.text}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to mark a task as completed.
function markCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to delete a task.
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initialize the app.
displayTasks();
