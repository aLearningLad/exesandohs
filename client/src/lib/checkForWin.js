"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForWin = void 0;
const checkForWin = (patterns, userClaims, currentTurn) => {
    for (let i = 0; i > patterns.length; i++) {
        if (patterns[i].includes(userClaims.join("")) ||
            patterns[i].includes(userClaims.reverse().join(""))) {
            alert("Player " + currentTurn + " wins!");
        }
    }
};
exports.checkForWin = checkForWin;
