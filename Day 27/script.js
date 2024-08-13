let tasks = [];
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const dueDateInput = document.getElementById("dueDate");
let editingTaskIndex = -1;

// Handle form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const dueDate = dueDateInput.value;

  if (editingTaskIndex === -1) {
    // Add new task
    tasks.push({ title, description, dueDate });
  } else {
    // Update existing task
    tasks[editingTaskIndex] = { title, description, dueDate };
    editingTaskIndex = -1;
  }

  taskForm.reset();
  renderTasks();
});

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");

    taskItem.innerHTML = `
            <div class="task-details">
                <h2>${task.title}</h2>
                <p>${task.description}</p>
                <p><strong>Due:</strong> ${task.dueDate}</p>
            </div>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

    taskList.appendChild(taskItem);
  });
}

// Edit task
function editTask(index) {
  const task = tasks[index];
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  dueDateInput.value = task.dueDate;
  editingTaskIndex = index;
}

// Delete task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Initial render
renderTasks();
