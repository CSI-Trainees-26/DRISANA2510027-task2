let habits = JSON.parse(localStorage.getItem("habits")) || [];
let habitInput = document.querySelector("#habitInput");
let habitCategory = document.querySelector("#habitCategory");
let habitFrequency = document.querySelector("#habitFrequency");
let addHabit = document.querySelector("#addHabit");
let habitsList = document.querySelector("#habitsList");
    addHabit.addEventListener("click", () => {
    let habitName = habitInput.value;
    let category = habitCategory.value;
    let frequency = habitFrequency.value;
    if (habitName !== "" && category !== "") {
        habits.push({
            name: habitName,
            category: category,
            frequency: frequency,
            completed: false
        });
        localStorage.setItem("habits", JSON.stringify(habits));
        habitInput.value = "";
        habitCategory.value = "";
        habitFrequency.value = "Daily";
    }
});