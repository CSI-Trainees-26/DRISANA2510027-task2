function updateHabitChart() {
let chartHabits = JSON.parse(localStorage.getItem("habits")) || [];
let workout = 0;
let fitness = 0;
let cardio = 0;
let mental = 0;
chartHabits.forEach((habit) => {
if (habit.category === "Workout") {
workout++;
}
else if (habit.category === "Fitness") {
fitness++;
}
else if (habit.category === "Cardio") {
cardio++;
}
else if (habit.category === "Mental Wellness") {
mental++;
}
});
let total = workout + fitness + cardio + mental;
let workoutPercentage = (workout / total) * 100;
let fitnessPercentage = (fitness / total) * 100;
let cardioPercentage = (cardio / total) * 100;
let mentalPercentage = (mental / total) * 100;
let piechart = document.querySelector("#piechart");
piechart.style.background = `conic-gradient(
#3f8236 0% ${workoutPercentage}%,
#8fcf8a ${workoutPercentage}% ${workoutPercentage + fitnessPercentage}%,
#f2b84b ${workoutPercentage + fitnessPercentage}% ${workoutPercentage + fitnessPercentage + cardioPercentage}%,
#c98bc9 ${workoutPercentage + fitnessPercentage + cardioPercentage}% 100%
)`;
document.querySelector("#workoutPercentage").textContent = Math.round(workoutPercentage) + "%";
document.querySelector("#fitnessPercentage").textContent = Math.round(fitnessPercentage) + "%";
document.querySelector("#cardioPercentage").textContent = Math.round(cardioPercentage) + "%";
document.querySelector("#mentalPercentage").textContent = Math.round(mentalPercentage) + "%";

document.querySelector("#workoutCount").textContent = workout;
document.querySelector("#fitnessCount").textContent = fitness;
document.querySelector("#cardioCount").textContent = cardio;
document.querySelector("#mentalCount").textContent = mental;
}

updateHabitChart();