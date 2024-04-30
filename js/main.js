class Plant {
}
window.onload = function () {
    let addPlantBtn = document.querySelector("#add-plant");
    addPlantBtn.onclick = processPlant;
};
function processPlant() {
    let userPlant = getPlant();
    if (userPlant != null) {
        addPlant(userPlant);
    }
}
function getPlant() {
    return null;
}
function isValidInput(id, errorMsg) {
    return "";
}
function addPlant(plant) {
    alert("Adding plant data was valid, plant added");
    console.log(plant);
}
