const taskInput = document.getElementById("taskInput");
const tasksList = document.getElementById("tasksList");

function removeTask(button){
    button.parentElement.remove();
}

function addTask(){
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("onClick", "removeTask(this)");

    li.appendChild(span);
    li.appendChild(removeButton);
    
    tasksList.appendChild(li);
    taskInput.value = "";
}