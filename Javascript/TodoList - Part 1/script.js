function addTask(){
    const task = taskInput.value;
    const li = document.createElement("li");
    const span = document.createElement("span"); // Create a span element
    span.textContent = task; // Set the task name as text content of the span
    li.appendChild(span); // Append the span to the li
    taskList.append(li);
    taskInput.value = "";
}
