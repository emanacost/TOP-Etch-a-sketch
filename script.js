// Will use script to create an X by X grid

console.log("I'm connected!")

// Initializing some of the variables that will be needed later
const boxesContainer = document.querySelector('#boxes-container');

// const boxes = document.createElement("div");
// boxes.id = "box"; // These will be the boxes that will be in the etch a sketch

// Add a function that will be used to create the grid of boxes in the etch a sketch
function grid(size) {
    boxSize = (100 / size) - 1;
    boxSize.toString();
    for (let i = 0; i < size**2; i++) {
        const boxes = document.createElement("div");
        boxes.id = "box";
        boxes.style.width = boxSize + "%";
        boxes.style.height = boxSize + "%";
        boxesContainer.appendChild(boxes);
    };
}

// quick little button for testing grid function
const btn =  document.querySelector("#btn");
btn.addEventListener ("click", () => {grid(14)})