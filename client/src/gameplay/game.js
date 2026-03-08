"use strict";
const board = document.querySelector(".board");
const squareCount = 9;
let playCount = 1;
let player1Claimed = [];
let player2Claimed = [];
// show number one inside board, in white
if (board) {
    const changeColourOnClick = (squareId) => {
        playCount++;
        const thisSquare = document.getElementById(squareId);
        // if player has chosen this square before, abort
        if (thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.hasChildNodes()) {
            alert("This square has already been claimed");
            return;
        }
        // if play count is even -> square turns pink & add O
        if (playCount % 2 === 0) {
            // this is player 2
            player2Claimed.push(squareId);
            alert("player2 claims: " + player2Claimed.join(""));
            // handle colour
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.classList.add("evenCount");
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.classList.remove("square");
            // add 0
            const Oh = document.createElement("p");
            Oh.innerHTML = "X";
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.appendChild(Oh);
            return;
        }
        else {
            player1Claimed.push(squareId);
            alert("Player1 plays: " + player1Claimed.join(""));
            // if play count is odd => square turns green & add X
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.classList.add("oddCount");
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.classList.remove("square");
            // add X
            const Ex = document.createElement("p");
            Ex.innerHTML = "O";
            thisSquare === null || thisSquare === void 0 ? void 0 : thisSquare.appendChild(Ex);
        }
        // check player has won
        // possible winning combos
        // 1,2,3 OR 456 OR 789
        // 1,5,9 OR 3,5,7
        // check winning play
        if (player1Claimed.join("") === "123" ||
            player1Claimed.join("") === "456" ||
            player1Claimed.join("") === "789" ||
            player1Claimed.join("") === "159" ||
            player1Claimed.join("") === "357") {
            alert("Game over! Player 1 wins!");
        }
    };
    // create 9 squares
    for (let i = 0; i < squareCount; i++) {
        console.log("appending square");
        // create a single block
        const square = document.createElement("div");
        // give the square an id for when user clicks it
        square.setAttribute("id", String(i + 1));
        // add an event listener to each square so we can click & shii
        square.addEventListener("click", () => changeColourOnClick(String(i + 1)));
        // add classname so we can style it
        square.classList.add("square");
        board.appendChild(square);
    }
}
