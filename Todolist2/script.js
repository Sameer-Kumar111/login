document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        document.getElementById("todo-list").appendChild(li);
        input.value = ""; // Clear input field
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}
