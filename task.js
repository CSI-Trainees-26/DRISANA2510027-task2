let addBtn = document.querySelector(".addtask");
addBtn.addEventListener("click", () => {
let newTask = document.createElement("div");
newTask.classList.add("taskrow");
let input = document.createElement("input");
input.classList.add("taskinput");
input.placeholder = "Enter task to add";
newTask.appendChild(input);
let todayTasks = document.querySelector(".todaytasks");
todayTasks.appendChild(newTask);});