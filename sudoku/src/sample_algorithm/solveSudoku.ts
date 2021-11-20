import { SudokuBoard } from "../models/SudokuGrid";

export const solveSudoku = (board: SudokuBoard) => {
	// console.log(store.getState().gridState.speed)
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 0) {
				// Dispath current square
				for (let k = 1; k <= 9; k++) {
					if (isValid(k, i, j, board)) {
						// If valid, assign to board[i][j] and dispatch
						board[i][j] = k;
						// let current = [i,j]
						// Get wait time from store
						// if solveSudoku, return true
						if (solveSudoku(board)) {
							return true
						} else {
							// else set board[i][j] to 0 and dispatch
							board[i][j] = 0;
						}
					}
				}
				return false
			}
		}
	}
	return true
};

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