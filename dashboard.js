let addWater = document.querySelector("#addWater");
let waterData = document.querySelector("#waterData");
let water = 1500;
document.querySelector("#water").style.width = (water / 2500) * 100 + "%";
addWater.addEventListener("click", () => {
    if (water < 2500) {
        water = water + 250;
        waterData.textContent = water / 1000 + "/2.5L";
         let percentage = (water / 2500) * 100;
         document.querySelector("#water").style.width = percentage + "%";
        if (water === 2500) {
        addWater.textContent = "Goal Completed ✓"; }}
});