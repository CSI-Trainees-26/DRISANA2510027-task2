let addBtn = document.querySelector(".addtask");
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
let task = document.createElement("div");
task.classList.add("taskrow");
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
let text = document.createElement("p");
text.textContent = taskText;
task.appendChild(checkbox);
task.appendChild(text);

let delAdd = document.createElement("div");
delAdd.classList.add("taskactions");
let editBtn = document.createElement("button");
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
editBtn.addEventListener("click", ()=> {
    let editTask= document.createElement("input");
    editTask.value = text.textContent;
    task.replaceChild(editTask , text);
    editTask.focus();
    editTask.addEventListener("keydown", (e) => {
if (e.key === "Enter" && editTask.value!== "") {
  text.textContent = editTask.value;
 task.replaceChild(text, editTask);} }); });
let deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete");
deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteBtn.addEventListener("click" ,( )=>{
    task.remove();
});
 delAdd.appendChild(editBtn);
 delAdd.appendChild(deleteBtn);
 task.appendChild(delAdd);
 todayTasks.appendChild(task);
 newTask.remove();}}}); });
