let addWater = document.querySelector("#addWater");
let waterData = document.querySelector("#waterData");
let water = JSON.parse(localStorage.getItem("water")) || 1500;
document.querySelector("#water").style.width = (water / 2500) * 100 + "%";
addWater.addEventListener("click", () => {
    if (water < 2500) {
        water = water + 250;
        localStorage.setItem("water" , JSON.stringify(water));
        waterData.textContent = water / 1000 + "/2.5L";
         let percentage = (water / 2500) * 100;
         document.querySelector("#water").style.width = percentage + "%";
        if (water === 2500) {
        addWater.textContent = "Goal Completed ✓"; }}
});
let addSleep = document.querySelector("#addSleep");
let sleepInput = document.querySelector("#sleepInput");
let sleepData = document.querySelector("#sleepData");
let sleep = JSON.parse(localStorage.getItem("sleep")) || 0;
let sleepTarget = 6;
addSleep.addEventListener("click", () => {
sleep = Number(sleepInput.value);
if (sleep >= 0 && sleep <= 24) {
localStorage.setItem("sleep", JSON.stringify(sleep));
sleepData.textContent = sleep + " / " + sleepTarget + " hrs";
let percentage = (sleep / sleepTarget) * 100;
          if (percentage > 100) {
            percentage = 100; }
 document.querySelector("#sleep").style.width = percentage + "%";
    }
});
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskSection = document.querySelector(".tasks");
let taskRows = taskSection.querySelectorAll(".task");
taskRows.forEach((row) => {
    row.remove();
});
    tasks.forEach((task) => {
    let taskRow = document.createElement("div");
    taskRow.classList.add("task");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    let text = document.createElement("p");
    text.textContent = task.text;
    if (task.completed) {
        text.style.textDecoration = "line-through";
    }
       checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";}
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    taskRow.appendChild(checkbox);
    taskRow.appendChild(text);
    let viewAll = taskSection.querySelector(".view-all");
    taskSection.insertBefore(taskRow, viewAll);
});
 let taskProgress = document.querySelector("#taskProgress");
 let totalTaskCount = tasks.length;
 let completedTaskCount = tasks.filter((task) => task.completed).length;
 taskProgress.textContent = completedTaskCount + " / " + totalTaskCount;
 let taskPercentage = 0;
 if (totalTaskCount > 0) {
    taskPercentage = (completedTaskCount / totalTaskCount) * 100;}
document.querySelector("#task").style.width = taskPercentage + "%";

let addCalories = document.querySelector("#addCalories");
let calorieInput = document.querySelector("#calorieInput");
let calorieData = document.querySelector("#calorieData");
let calories = JSON.parse(localStorage.getItem("calories")) || 0;
let calorieTarget = 2000;
calorieData.textContent = calories + " kcal";
let caloriePercentage = (calories / calorieTarget) * 100;
if (caloriePercentage > 100) {
    caloriePercentage = 100;}
document.querySelector("#calorieBar").style.width = caloriePercentage + "%";
addCalories.addEventListener("click", () => {
let enteredCalories = Number(calorieInput.value);
        if (enteredCalories > 0) {
        calories = calories + enteredCalories;
        localStorage.setItem("calories", JSON.stringify(calories));
calorieData.textContent = calories + " kcal";
let percentage = (calories / calorieTarget) * 100;
        if (percentage > 100) {
            percentage = 100;
        }
document.querySelector("#calorieBar").style.width = percentage + "%";calorieInput.value = "";
    }
});
let newQuote = document.querySelector(".newquote");
let quoteline = document.querySelector("#quoteline");
newQuote.addEventListener("click", () => {
    fetch("https://dummyjson.com/quotes/random")
        .then((response) => response.json())
        .then((data) => {
            quoteline.textContent = '"' + data.quote + '"';
        });
});
let saveQuote = document.querySelector(".savequote");
saveQuote.addEventListener("click", () => {
let quote = quoteline.textContent;
localStorage.setItem("savedQuote", quote);
});
let timer = document.querySelector("#timer");
let startTimer = document.querySelector("#start");
let resetTimer = document.querySelector("#reset");
let time = 25 * 60;
function countdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timer.textContent = minutes + ":" + seconds;
    if (time > 0) {
        time--;
        setTimeout(countdown, 1000);
        } 
        else {
        alert("Pomodoro session completed!");}
    }
    startTimer.addEventListener("click", () => {
    countdown();
});
resetTimer.addEventListener("click", () => {
    time = 25 * 60;
    timer.textContent = "25:00";
});
let weeklyTasks = document.querySelector("#weeklytaskdone");
weeklyTasks.textContent = tasks.filter((task) => task.completed).length;

let weeklytotaltasks = document.querySelector("#weeklytotaltasks");
weeklytotaltasks.textContent = tasks.length;
let weeklywater = document.querySelector("#weeklywater");
weeklywater.textContent = (water / 1000) + " L";
let weeklysleep = document.querySelector("#weeklysleep");
weeklysleep.textContent = sleep + " hrs";
