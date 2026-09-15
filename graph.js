console.log("graph js started");
let graphTasks = JSON.parse(localStorage.getItem("tasks")) || [];
let graphBars = document.querySelectorAll(".barfill");
let todaydate = new Date();
let day = todaydate.getDay();
let monday = new Date(todaydate);
monday.setDate(todaydate.getDate() - (day === 0 ? 6 : day - 1));
let weekDates = [];
for (let i = 0; i < 7; i++) {
    let date = new Date(monday);
    date.setDate(monday.getDate() + i);
    weekDates.push(date.toISOString().split("T")[0]);
}
let completedTasks = graphTasks.filter((task) => task.completed);
console.log("completed tasks:", completedTasks);
console.log("week dates:", weekDates);
let maxTasks = completedTasks.length;
graphBars.forEach((bar, index) => {
let count = completedTasks.filter((task) => {
     return task.completedDate === weekDates[index];})
     .length;
   let percentage = 0;
   if (maxTasks > 0) {
      percentage = (count / maxTasks) * 100;}
    bar.style.height = percentage + "%";

});