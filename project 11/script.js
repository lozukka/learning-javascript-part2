const saveBtn = document.getElementById("save-task");

saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    let newTask = document.getElementById("task").value;
    console.log(newTask);
    saveNewTask(newTask);
    renderTask(newTask);

    document.getElementById("task").value = "";
})


function renderTask(newTask){
    let ul = document.getElementById("list-of-tasks");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
    li.remove(); // poistaa tehtävän
});
    span.textContent = newTask;
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

function saveNewTask(newTask){
    fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
        title: newTask,
        completed: false,
        userId: 1
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then((response) => response.json())
.then((json) => console.log("Saved to API:", json));

}


async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const tasks = await response.json();
      tasks.forEach(task => renderTask(task.title, task.completed));
}

window.addEventListener("load", fetchTasks);