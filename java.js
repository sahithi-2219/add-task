const savedTasksList = document.getElementById("savedTasks");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const validationMessage = document.getElementById("validationMessage");

saveTaskBtn.addEventListener("click", saveTask);

function saveTask() {
    const taskTitleInput = document.getElementById("taskTitleInput");
    const taskDescriptionInput = document.getElementById("taskDescriptionInput");

    const taskTitle = taskTitleInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();

    if (taskTitle !== "" && taskDescription !== "") {
        const taskItem = createTaskItem(taskTitle, taskDescription);
        savedTasksList.appendChild(taskItem);

        // Reset input fields
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";

        // Hide validation message
        validationMessage.classList.add("hidden");
    } else {
        // Show validation message
        validationMessage.classList.remove("hidden");
    }
}

function createTaskItem(title, description) {
    const li = document.createElement("li");

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = `<strong>Title:</strong> ${title}`;
    li.appendChild(titleDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.innerHTML = `<strong>Description:</strong> ${description}`;
    li.appendChild(descriptionDiv);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        deleteTask(li);
    });
    actionsDiv.appendChild(deleteButton);

    li.appendChild(actionsDiv);

    return li;
}

function deleteTask(taskItem) {
    taskItem.remove();
}
