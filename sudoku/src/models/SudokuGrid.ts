export type SudokuBoard = number[][];
export type CurrentBox = [number, number];


export interface GridComponentProps {
  grid: Number[][]
};

export interface IGridState {
  grid: SudokuBoard,
  current: CurrentBox,
  solving: Boolean,
  solveCompleted: Boolean
}