"use strict";
const board = document.querySelector(".board");
const squareCount = 9;
// show number one inside board, in white
if (board) {
    const changeColourOnClick = (squareId) => {
        alert("Clicked square with ID: " + squareId);
    };
    // create 9 squares
    for (let i = 0; i < squareCount; i++) {
        console.log("appending square");
        // create a single block
        const square = document.createElement("div");
        // give the square an id for when user clicks it
        square.setAttribute("id", String(i));
        // add an event listener to each square so we can click & shii
        // add classname so we can style it
        square.classList.add("square");
        board.appendChild(square);
    }
}
