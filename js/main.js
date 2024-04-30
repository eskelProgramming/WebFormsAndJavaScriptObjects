class Plant {
}
window.onload = function () {
    let addPlantBtn = document.querySelector("#add-plant");
    addPlantBtn.onclick = processPlant;
};
function processPlant() {
    clearAllErrorMessages();
    let userPlant = getPlant();
    if (userPlant != null) {
        addPlant(userPlant);
    }
}
function getPlant() {
    if (isValidInput()) {
        let plant = new Plant();
        let name = document.querySelector("#plant-name");
        plant.name = name.value;
        let type = document.querySelector("#plant-type");
        plant.type = type.value;
        let wateringFrequency = document.querySelector("#watering-needs");
        plant.wateringFrequency = wateringFrequency.value;
        let sunlight = document.querySelector("#sunlight-needs");
        plant.sunlight = sunlight.value;
        return plant;
    }
    return null;
}
function isValidInput() {
    let name = document.querySelector("#plant-name");
    let type = document.querySelector("#plant-type");
    let wateringFrequency = document.querySelector("#watering-needs");
    let sunlight = document.querySelector("#sunlight-needs");
    let nameIsValid = isValidString(name);
    let typeIsValid = isValidString(type);
    let wateringIsValid = isValidString(wateringFrequency);
    let sunlightIsValid = isValidString(sunlight);
    return nameIsValid && typeIsValid && wateringIsValid && sunlightIsValid;
}
function isValidString(currElement) {
    if (currElement.value.trim() != "") {
        return true;
    }
    else {
        currElement.nextElementSibling.textContent = "This field is required.";
        return false;
    }
}
function addPlant(plant) {
    alert("Adding plant data was valid, plant added");
    console.log(plant);
}
function clearAllErrorMessages() {
    let allErrorMessages = document.querySelectorAll("span.error-msg");
    allErrorMessages.forEach(span => span.textContent = "");
}
