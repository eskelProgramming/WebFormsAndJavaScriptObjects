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
    


    return null;
}

// 
function isValidInput(id:string, errorMsg:string):string {
    // Get the values from the form

    // Validate plant name
    
    // Validate plant type

    // Validate watering frequency

    // Validate sunlight

    return "";
}

/**
 * Displays the plant data in the console and alerts the user.
 */
function addPlant(plant:Plant):void {
    alert("Adding plant data was valid, plant added");
    console.log(plant);
}