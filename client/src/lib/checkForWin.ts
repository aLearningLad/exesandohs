// ***************** ACTION PLAN *************
// instead of array, use a map and just have this function check if map has values in string
// save each 3 number string as a key
// map is faster to search through than an array

const winningCombosMap = new Map<string, string>();

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
      return;
    } else {
      alert("Player " + currentTurn + " has claimed " + userClaims);
    }
  }
};
