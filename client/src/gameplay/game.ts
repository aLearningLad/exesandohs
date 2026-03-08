const board: HTMLDivElement | null = document.querySelector(".board");
const squareCount = 9;
let playCount = 1;

// show number one inside board, in white
if (board) {
  const changeColourOnClick = (squareId: string): void => {
    playCount++;

    const thisSquare = document.getElementById(squareId);
    // if play count is even -> square turns pink
    if (playCount % 2 === 0) {
      thisSquare?.classList.add("evenCount");
      thisSquare?.classList.remove("square");
      return;
    }

    // if play count is odd => square turns green
    thisSquare?.classList.add("oddCount");
    thisSquare?.classList.remove("square");
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
