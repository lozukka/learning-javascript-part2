const saveBtn = document.getElementById("save-task");

saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    
    let newTask = document.getElementById("task").value;
    if (!newTask.trim()) return;

    console.log(newTask);
    saveNewTask(newTask);
    renderTask(newTask);

    document.getElementById("task").value = "";
})


function renderTask(newTask, id){
    const ul = document.getElementById("list-of-tasks");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", async () => {
    li.remove(); // poistaa tehtävän
    if (id) {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE"
            });
            console.log(`Deleted task with id: ${id}`);
        }
});
    span.textContent = newTask;
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

async function saveNewTask(newTask){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
            title: newTask,
            completed: false,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    const savedTask = await response.json();
    console.log("Saved to API:", savedTask);
    
}


async function fetchTasks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      const tasks = await response.json();
      tasks.forEach(task => renderTask(task.title, task.id));
}

window.addEventListener("load", fetchTasks);