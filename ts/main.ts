/**
 * Represents a single plant that the user wants to keep track of.
 */
class Plant {
    name : string;
    type : string;
    wateringFrequency : string;
    sunlight : string;
}

/**
 * When the form is submitted, the processPlant function is called.
 */
window.onload = function() {
    // Set up the button click for add plant form
    let addPlantBtn = document.querySelector("#add-plant") as HTMLButtonElement;
    addPlantBtn.onclick = processPlant;
}

function processPlant() {
    clearAllErrorMessages();
    
    let userPlant = getPlant();
    if (userPlant != null) {
        addPlant(userPlant);
    }
}

/**
 * Check if the input on the form is valid and
 * returns a Plant object if valid or null if invalid/empty.
 * @returns Plant object or null if invalid input
 */
function getPlant():Plant {
    if (isValidInput()) {
        let plant = new Plant();
        let name = document.querySelector("#plant-name") as HTMLInputElement;
        plant.name = name.value;

        let type = document.querySelector("#plant-type") as HTMLInputElement;
        plant.type = type.value;

        let wateringFrequency = document.querySelector("#watering-needs") as HTMLInputElement;
        plant.wateringFrequency = wateringFrequency.value;

        let sunlight = document.querySelector("#sunlight-needs") as HTMLInputElement;
        plant.sunlight = sunlight.value;

        return plant;
    }
    return null;
}

// 
function isValidInput():boolean {
    // Get the values from the form
    let name = document.querySelector("#plant-name") as HTMLInputElement;
    let type = document.querySelector("#plant-type") as HTMLInputElement;
    let wateringFrequency = document.querySelector("#watering-needs") as HTMLInputElement;
    let sunlight = document.querySelector("#sunlight-needs") as HTMLInputElement;

    //    Validate plant name
    // && Validate plant type
    // && Validate watering frequency
    // && Validate sunlight
    // return the result of the validation

    // call them all individually so all errors are displayed
    let nameIsValid = isValidString(name);
    let typeIsValid = isValidString(type);
    let wateringIsValid = isValidString(wateringFrequency);
    let sunlightIsValid = isValidString(sunlight);

    return nameIsValid && typeIsValid && wateringIsValid && sunlightIsValid;
}


/**
 * Checks if the input is a valid string and not empty.
 */
function isValidString(currElement:HTMLInputElement):boolean {
    if (currElement.value.trim() != ""){
        return true;
    }
    else{
        currElement.nextElementSibling.textContent = "This field is required.";
        return false;
    }
}

/**
 * Displays the plant data in the console and alerts the user.
 */
function addPlant(plant:Plant):void {
    alert("Adding plant data was valid, plant added");
    console.log(plant);
}

/**
 * Clears the error messages.
 */
function clearAllErrorMessages() {
    // Get all the error spans
    let allErrorMessages = document.querySelectorAll("span.error-msg");

    // Loop through each span and set the text content to an empty string
    allErrorMessages.forEach(span => span.textContent = "");
}