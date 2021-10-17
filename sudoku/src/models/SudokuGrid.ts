export type SudokuBoard = number[][];
export type CurrentBox = [number, number];


export interface GridComponentProps {
  grid?: number[][]
};

export interface IGridState {
  originalGrid: SudokuBoard,
  grid: SudokuBoard,
  current: CurrentBox,
  solving: boolean,
  solveCompleted: boolean,
  errorMessage: string
}

export enum GridActionTypes {
  SET_GRID = 'SET_GRID',
  UPDATE_BOX = 'UPDATE_BOX',
  SET_CURRENT_BOX = 'SET_CURRENT_BOX',
  UPDATE_SOLVE_STATUS = 'UPDATE_SOLVE_STATUS',
  ERROR = 'ERROR',
}

export interface ISetGridAction {
  type: GridActionTypes.SET_GRID;
  grid: SudokuBoard;
}

export interface IUpdateBoxAction {
  type: GridActionTypes.UPDATE_BOX;
  currentVal: number; 
}

export interface ISetCurrentBoxAction {
  type: GridActionTypes.SET_CURRENT_BOX;
  current: CurrentBox;
}

export interface ISetSolveStatus {
  type: GridActionTypes.UPDATE_SOLVE_STATUS;
  solving: boolean;
  solveCompleted: boolean;
}

export interface IErrorAction {
  type: GridActionTypes.ERROR;
  errorMessage: string;
}



export type GridActions = ISetGridAction | IUpdateBoxAction | ISetCurrentBoxAction | ISetSolveStatus | IErrorAction;

