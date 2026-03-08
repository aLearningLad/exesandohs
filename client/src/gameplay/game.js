"use strict";
const board = document.querySelector(".board");
const squareCount = 9;
// show number one inside board, in white
if (board) {
    // create 9 squares
    for (let i = 0; i < squareCount; i++) {
        console.log("appending square");
        // create a single block
        const square = document.createElement("div");
        // add classname so we can style it
        square.classList.add("square");
        board.appendChild(square);
    }
}
