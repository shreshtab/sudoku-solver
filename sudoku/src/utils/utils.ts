import { SudokuBoard } from "../models/SudokuGrid"

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