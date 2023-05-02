// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    let currentShipPosition = shipPositions[i];
    initialBoard[currentShipPosition[0]][currentShipPosition[1]] = "S";
  }

  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    let currentGuess = guesses[i];
    if (mountedBoard[currentGuess[0]][currentGuess[1]] == "S") {
      mountedBoard[currentGuess[0]][currentGuess[1]] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    let currentBoardLine = guessedBoard[i];
    for (let j = 0; j < currentBoardLine.length; j++) {
      if (currentBoardLine[j] == "S") {
        return false;
      }
    }
  }
  return true;
}
