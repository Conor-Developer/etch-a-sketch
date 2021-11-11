
let userInput;
do {
    userInput = prompt("Please choose a number between 1 and 100: ", 0);
} while (userInput && userInput < 1 || userInput > 100 || isNaN(userInput));

let userInputCalc = userInput * userInput;
let gridSize = 100 / userInput + `%`;


for (let i = 0; i < userInputCalc; i++) {
    const container = document.querySelector("#container");
    const grid = document.createElement("div");
    grid.classList.toggle("grid");
    grid.style.height = gridSize;
    grid.style.width = gridSize;
    container.appendChild(grid);
}


    for (let j = 0; j < userInputCalc; j++) {
    const gridDivs = document.getElementsByClassName("grid");
    gridDivs[j].addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "black";
})
    };


