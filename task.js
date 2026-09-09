let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
let addBtn = document.querySelector(".addtask");
let pendingtasklist = document.querySelector("#pendingtasklist");
let completedtasklist = document.querySelector("#completedtasklist");

addBtn.addEventListener("click", () => {
let newTask = document.createElement("div");
newTask.classList.add("taskrow");
let input = document.createElement("input");
input.classList.add("taskinput");
input.placeholder = "Enter task to add";
newTask.appendChild(input);
let todayTasks = document.querySelector(".todaytasks");
todayTasks.appendChild(newTask);

input.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
 let taskText = input.value;
if (taskText !== "") {
    tasks.push({
        text: taskText,
        completed: false});
       saveTasks();

let task = document.createElement("div");
task.classList.add("taskrow");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
let text = document.createElement("p");
text.textContent = taskText;
checkbox.addEventListener("change", () => {
task.classList.toggle("completedtask");
let taskIndex = tasks.findIndex((item) => item.text === text.textContent);
if (taskIndex !== -1) {
    tasks[taskIndex].completed = checkbox.checked;
}
saveTasks();
updateCounters();
});
task.appendChild(checkbox);
task.appendChild(text);
let delAdd = document.createElement("div");
delAdd.classList.add("taskactions");
let editBtn = document.createElement("button");
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
let deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete");
deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteBtn.addEventListener("click", () => {
let taskIndex = tasks.findIndex((item) => item.text === text.textContent);
if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
}
saveTasks();
task.remove();
updateCounters();
});
editBtn.addEventListener("click", () => {
let editTask = document.createElement("input");
editTask.value = text.textContent;
task.replaceChild(editTask, text);
editTask.focus();
editTask.addEventListener("keydown", (e) => {
if (e.key === "Enter" && editTask.value !== "") {
text.textContent = editTask.value;
task.replaceChild(text, editTask);
saveTasks();}});
});
delAdd.appendChild(editBtn);
delAdd.appendChild(deleteBtn);
task.appendChild(delAdd);
todayTasks.appendChild(task);
let pendingTask = document.createElement("div");
pendingTask.classList.add("smalltask");
pendingTask.setAttribute("draggable", "true");
let pendingCheckbox = document.createElement("input");
pendingCheckbox.type = "checkbox";
let pendingText = document.createElement("p");
pendingText.textContent = taskText;
pendingTask.appendChild(pendingCheckbox);
pendingTask.appendChild(pendingText);
pendingtasklist.appendChild(pendingTask);
pendingTask.addEventListener("dragstart", () => {
    pendingTask.classList.add("dragging");
});
pendingTask.addEventListener("dragend", () => {
    pendingTask.classList.remove("dragging");
});
newTask.remove();
updateCounters();}}});
});

function updateCounters() {
let totalTasks = document.querySelector("#totalTasks");
let tasks = document.querySelectorAll(".todaytasks .taskrow");
totalTasks.textContent = tasks.length;

let completedTasks = document.querySelector("#completedTasks");
let completed = document.querySelectorAll(".todaytasks .completedtask");
completedTasks.textContent = completed.length;

let pendingTasks = document.querySelector("#pendingTasks");
pendingTasks.textContent = tasks.length - completed.length;
}
updateCounters();
let draggableTasks = document.querySelectorAll("#pendingtasklist .smalltask");
draggableTasks.forEach((task) => {
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
    });
    task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    });
});
completedtasklist.addEventListener("dragover", (e) => {
    e.preventDefault();
});
completedtasklist.addEventListener("drop", () => {
    let task = document.querySelector(".dragging");
        if (task) {
        completedtasklist.appendChild(task);
        task.classList.add("completedtask");
        let checkbox = task.querySelector("input");
        checkbox.checked = true;}
});