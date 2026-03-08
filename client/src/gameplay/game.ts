const board: HTMLDivElement | null = document.querySelector(".board");
const squareCount = 9;
let playCount = 1;
let player1Claimed: string[] = [];
let player2Claimed: string[] = [];

// show number one inside board, in white
if (board) {
  const changeColourOnClick = (squareId: string): void => {
    playCount++;

    const thisSquare = document.getElementById(squareId);

    // if player has chosen this square before, abort
    if (thisSquare?.hasChildNodes()) {
      alert("This square has already been claimed");
      return;
    }

    // if play count is even -> square turns pink & add O
    if (playCount % 2 === 0 && playCount !== 1) {
      // this is player 1
      player2Claimed.push(squareId);
      alert("player1 claims: " + player1Claimed.join(""));

      // handle colour
      thisSquare?.classList.add("evenCount");
      thisSquare?.classList.remove("square");

      // add 0
      const Oh = document.createElement("p");
      Oh.innerHTML = "X";
      thisSquare?.appendChild(Oh);
      return;
    } else {
      player1Claimed.push(squareId);
      alert("Player2 plays: " + player2Claimed.join(""));

      // if play count is odd => square turns green & add X
      thisSquare?.classList.add("oddCount");
      thisSquare?.classList.remove("square");

      // add X
      const Ex = document.createElement("p");
      Ex.innerHTML = "O";
      thisSquare?.appendChild(Ex);
    }

    // check player has won

    // possible winning combos
    // 1,2,3 OR 456 OR 789
    // 1,5,9 OR 3,5,7

    // check winning play
    if (
      player1Claimed.join("").includes("123") ||
      player1Claimed.join("").includes("456") ||
      player1Claimed.join("").includes("789") ||
      player1Claimed.join("").includes("159") ||
      player1Claimed.join("").includes("357")
    ) {
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
