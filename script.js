console.log("I'm connected!")

// Initializing some of the variables that will be needed later
const boxesContainer = document.querySelector('#boxes-container');

// const boxes = document.createElement("div");
// boxes.id = "box"; // These will be the boxes that will be in the etch a sketch

// Add a function that will be used to create the grid of boxes in the etch a sketch
function grid(size) {
    boxesContainer.innerHTML = "";
    boxSize = (100 / size) - 1;
    boxSize.toString();
    for (let i = 0; i < size**2; i++) {
        const boxes = document.createElement("div");
        boxes.id = "box";
        boxes.style.width = boxSize + "%";
        boxes.style.height = boxSize + "%";
        boxesContainer.appendChild(boxes);
        boxes.addEventListener("mouseover", () => {
            boxes.style.backgroundColor = "black";
});
    };
}

// Select all radio buttons
const radioButtons = document.querySelectorAll('input[type="radio"]');
// Clear the radio buttons on page load
window.onload = () => {
    radioButtons.forEach( radio => {
        radio.checked = false;
    });
};
// Use radio buttons to select desired grid size
radioButtons.forEach(radio => {
    radio.addEventListener("change", (event) => {
        if (event.target.checked) {
            grid(Number(event.target.value))
        }
    });
});