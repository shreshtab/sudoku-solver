import { SudokuBoard } from "../models/SudokuGrid"
import puzzleData from "../data/puzzles.json"

// Deep Copy 2D Array
export const deepCopyGrid = (grid: SudokuBoard) => {
  return grid.map((row: number[]) => {
    return [...row]
  })
}

// Deep Copy and Replace Element in 2D Array

export const deepCopyAndReplaceAtIndex =
  (grid: SudokuBoard, rowIdx:number, colIdx: number, value: number) => {
    return grid.map((row, gridRowIdx) => {
      if (rowIdx === gridRowIdx) return row.map((col, gridColIdx) => {
        if (colIdx === gridColIdx) return value;
        return col
      })
      return row
    })
}

export const createSudokuArrayFromString = (sudokuString: string) => {
  const finalPuzzle = new Array(9);
  let currentArray: number[] = []
  for (let i = 0; i < sudokuString.length; i++) {
    currentArray.push(Number(sudokuString[i]))
    if (currentArray.length === 9) {
      finalPuzzle[Math.floor((i)/9)] = currentArray;
      currentArray = [];
    }
  }
  return finalPuzzle
};

export const getPuzzle = () => {
  const puzzleString = puzzleData.puzzles[getRandomInt(puzzleData.puzzles.length)].grid;
  return createSudokuArrayFromString(puzzleString)
}

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max)
}