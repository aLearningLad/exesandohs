const board: HTMLDivElement | null = document.querySelector(".board");
const squareCount = 9;
let playCount = 1;
let player1Claimed: string[] = [];
let player2Claimed: string[] = [];

// show number one inside board, in white
if (board) {
  const changeColourOnClick = (squareId: string): void => {
    const thisSquare = document.getElementById(squareId);

    // if player has chosen this square before, abort
    if (thisSquare?.hasChildNodes()) {
      alert(
        "This square has already been claimed. Try selecting an empty square to continue playing",
      );
      return;
    }

    // if play count is even -> square turns pink & add O
    if (playCount % 2 === 0) {
      // this is player 2
      player2Claimed.push(squareId);

      // handle colour
      thisSquare?.classList.add("evenCount");
      thisSquare?.classList.remove("square");

      // add 0
      const Oh = document.createElement("p");
      Oh.innerHTML = "X";
      thisSquare?.appendChild(Oh);
    } else {
      player1Claimed.push(squareId);
      alert("Player1 plays: " + player1Claimed.join(""));

      // if play count is odd => square turns green & add X
      thisSquare?.classList.add("oddCount");
      thisSquare?.classList.remove("square");

      // add X
      const Ex = document.createElement("p");
      Ex.innerHTML = "O";
      thisSquare?.appendChild(Ex);
    }

    playCount++;

    // check player has won

    // possible winning combos
    // 1,2,3 OR 456 OR 789
    // 1,5,9 OR 3,5,7
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
