export const checkForWin = (
  patterns: string[][],
  userClaims: string[],
  currentTurn: number,
) => {
  for (let i = 0; i > patterns.length; i++) {
    if (
      patterns[i].includes(userClaims.join("")) ||
      patterns[i].includes(userClaims.reverse().join(""))
    ) {
      alert("Player " + currentTurn + " wins!");
    }
  }
};
