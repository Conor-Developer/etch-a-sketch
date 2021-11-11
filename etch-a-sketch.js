let userValue;

// Requests the user to input a number between 1 and 100
function userPrompt() {
    let userInput;
do {
    userInput = prompt("Please choose your grid row size (between 1 and 100): ", 0);
} while (userInput && userInput < 1 || userInput > 100 || isNaN(userInput));
    userValue = userInput;
    return userInput;
}

// Calculates the total grid size of the etch-a-sketch
function calculations1() {
    let userInputCalc = userValue * userValue;
    return userInputCalc;
};

// Calculates the size of each div (square) in the grid
function calculations2() {
    let gridSize = 100 / userValue + `%`;
    return gridSize;
};

// Creates the grid and allows the user to play the etch-a-sketh
function createGrid() {
for (let i = 0; i < calculations1(); i++) {
    const container = document.querySelector("#container");
    const grid = document.createElement("div");
    grid.classList.toggle("grid");
    grid.style.height = calculations2();
    grid.style.width = calculations2();
    container.appendChild(grid);
}
}

// Changes the each Div (square) colour to black when mouse hovers
    function paintGrid() {
    for (let j = 0; j < calculations1(); j++) {
    const gridDivs = document.getElementsByClassName("grid");
    gridDivs[j].addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "black";
        })
    };
}

// Clears the etch-a-sketch drawing
function clearDrawing() {
    for (let z = 0; z < calculations1(); z++) {
        const gridDivs = document.getElementsByClassName("grid");
        document.getElementsByClassName("grid");
        gridDivs[z].style.backgroundColor = "white";
    }
}

// Removes existing grid
function removeGrid() {
for (let x = 0; x < calculations1(); x++) {
    const container = document.querySelector("#container");
    const gridDivs = container.querySelector("div");
    container.removeChild(gridDivs);
}
};

// Resets etch-a-sketch once button is clicked
const btn = document.querySelector("#reset");
btn.addEventListener("click", () => {
    clearDrawing();
    removeGrid();
    userPrompt();
    createGrid();
    paintGrid();
});

userPrompt();
createGrid();
paintGrid();