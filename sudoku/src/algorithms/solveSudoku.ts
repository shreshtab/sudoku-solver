import { SudokuBoard } from "../models/SudokuGrid";
// Import Actions for setting grid, current, updated

const solveSudoku = (board: SudokuBoard) => {
  // Write your code here.
	solveSudokuHelper(board)
	return board;
}

const solveSudokuHelper = (board: SudokuBoard) => {
	// Nested For Loops
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 0) {
				for (let k = 1; k <= 9; k++) {
          // TODO: Dispath current grid 
					// Check if value k is valid
					if (isValid(k, i, j, board)) {
						console.log(`${k} is valid`)
						// If valid, assign to board[i][j]
						board[i][j] = k;
            // TODO: Dispatch current board
						
						// if solveSudoku, return true
						if (solveSudokuHelper(board)) {
							return true
						} else {
							// else set board[i][j] to blank
							board[i][j] = 0;
              // TODO: Dispatch current board
						}
					}
				}
				return false
			}
		}
	}
	return true
}

const isValid = (value: number, row: number, column: number, board: SudokuBoard) => {
	// Check if value is present in row
	for (let c = 0; c < 9; c++) {
		if (board[row][c] === value) return false
	}
	// Check if value is present in column
	for (let r = 0; r < 9; r++) {
		if (board[r][column] === value) return false
	}
	// Check if value is present in box
	const rowStartIdx = 3 * (Math.floor(row/3));
	const colStartIdx = 3 * (Math.floor(column/3));
	
	for (let i = rowStartIdx; i < rowStartIdx + 3; i++) {
		for (let j = colStartIdx; j < colStartIdx + 3; j++) {
			if (board[i][j] === value) return false
		}
	}
	return true;
}

export default solveSudoku;