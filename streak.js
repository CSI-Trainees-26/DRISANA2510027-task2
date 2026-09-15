console.log("streak js started");
let streakMonth = document.querySelector("#streakMonth");
let streakCount = document.querySelector("#streakCount");
let todaysdate = new Date();
let monthName = todaysdate.toLocaleString("default", {month: "long"
});
streakMonth.textContent = monthName + " " + todaysdate.getFullYear();
let habits = JSON.parse(localStorage.getItem("habits")) || [];
let completedDates = [];
habits.forEach((habit) => {
    if (habit.history) {
    habit.history.forEach((date) => {
            if (!completedDates.includes(date)) {
                completedDates.push(date); }
        });}
});
console.log("completed habit dates:", completedDates);
let monthdatagrid = document.querySelector("#monthdatagrid");
let daysInMonth = new Date(
    todaysdate.getFullYear(),
    todaysdate.getMonth() + 1,
    0
).getDate();
for (let i = 1; i <= daysInMonth; i++) {
    let square = document.createElement("span");
    let date = new Date(
        todaysdate.getFullYear(),
        todaysdate.getMonth(), i
    );
    let dateString = date.toISOString().split("T")[0];
    if (completedDates.includes(dateString)) {
        square.classList.add("done");
    }
    monthdatagrid.appendChild(square);
}
let streak = 0;
for (let i = 0; i < 365; i++) {
    let date = new Date(todaysdate);
    date.setDate(todaysdate.getDate() - i);
    let dateString = date.toISOString().split("T")[0];
    if (completedDates.includes(dateString)) {
        streak++;
    } else {
        break;
    }
}
streakCount.textContent = streak;