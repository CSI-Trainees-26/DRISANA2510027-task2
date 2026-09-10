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
         id: Date.now(),
         name: habitName,
         category: category,
         frequency: frequency,
         completed: false,
         history: [] });
    localStorage.setItem("habits", JSON.stringify(habits));
    habitInput.value = "";
    habitCategory.value = "";
    habitFrequency.value = "Daily";
    showHabits();
    }
});
function showHabits() {
        habits.forEach((habit) => {
        let habitRow = document.createElement("div");
        habitRow.classList.add("habitrow");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = habit.completed;
        checkbox.addEventListener("change", () => {
        habit.completed = checkbox.checked;
        let today = new Date().toISOString().split("T")[0];
        if (!habit.history) {
        habit.history = [];}
        if (checkbox.checked) {
        if (!habit.history.includes(today)) {
            habit.history.push(today); }
} 
        else {
        habit.history = habit.history.filter((date) => date !== today);
    }
        localStorage.setItem("habits", JSON.stringify(habits));
       updateHabitCounts();
});
       let name = document.createElement("div");
        name.classList.add("habitname");
        let heading = document.createElement("h3");
        heading.textContent = habit.name;
        name.appendChild(heading);
        let category = document.createElement("span");
        category.classList.add("category");
        if (habit.category === "Workout") {
       category.classList.add("health");}
       else if (habit.category === "Fitness") {
       category.classList.add("fitness");}
       else if (habit.category === "Cardio") {
       category.classList.add("cardio");}
       else if (habit.category === "Mental Wellness") {
       category.classList.add("mental");}
       category.textContent = habit.category;
        let frequency = document.createElement("span");
        frequency.classList.add("frequency");
        frequency.textContent = habit.frequency;
        let actions = document.createElement("div");
        actions.classList.add("habitactions");
        let editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editButton.addEventListener("click", () => {
        let newName = prompt("Enter new habit name", habit.name);
        if (newName !== null && newName !== "") {
        habit.name = newName;
        localStorage.setItem("habits", JSON.stringify(habits));
        showHabits();}});
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener("click", () => {
        let index = habits.indexOf(habit);
        if (index !== -1) {
        habits.splice(index, 1);
        localStorage.setItem("habits", JSON.stringify(habits));
        showHabits();
        updateHabitCounts();}});
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);
        habitRow.appendChild(checkbox);
        habitRow.appendChild(name);
        habitRow.appendChild(category);
        habitRow.appendChild(frequency);
        habitRow.appendChild(actions);
        habitsList.appendChild(habitRow); });}
        showHabits();
        let filters = document.querySelectorAll(".filter");
        filters.forEach((filter) => {
        filter.addEventListener("click", () => {
        let selectedCategory = filter.textContent;
        filters.forEach((button) => {
        button.classList.remove("active");
        });
        filter.classList.add("active");
        let rows = document.querySelectorAll(".habitrow");
         rows.forEach((row) => {
         let category = row.querySelector(".category");
         if (selectedCategory === "All" || category.textContent === selectedCategory) {
                row.style.display = "flex";
            } 
            else {
                row.style.display = "none"; }}); });
                });
         let habitSort = document.querySelector("#habitSort");
         habitSort.addEventListener("change", () => {
        if (habitSort.value === "Sort: Newest") {
        habits.sort((a, b) => b.id - a.id);
        } 
        else {
        habits.sort((a, b) => a.id - b.id);}  
        showHabits();
});