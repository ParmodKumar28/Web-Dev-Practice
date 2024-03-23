const container = document.querySelector(".container");

function changeDirection(){
    let currentDirection = getComputedStyle(container).flexDirection;
    currentDirection = currentDirection === "row" ? "column" : "row";
    container.style.flexDirection = currentDirection;
}