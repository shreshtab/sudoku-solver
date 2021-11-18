export type SudokuBoard = number[][];
export type CurrentBox = [number, number];


export interface GridComponentProps {
  grid?: number[][]
};

export interface CellComponentProps {
  value: number,
  oldValue: number,
  row: number,
  col: number,
  currentRow: number,
  currentCol: number,
  solved: boolean
}

export interface IGridState {
  originalGrid: SudokuBoard,
  grid: SudokuBoard,
  current: CurrentBox,
  solving: boolean,
  solveCompleted: boolean,
  errorMessage: string,
  speed: number
}

export enum GridActionTypes {
  SET_GRID = 'SET_GRID',
  SET_CURRENT_BOX = 'SET_CURRENT_BOX',
  UPDATE_SOLVE_STATUS = 'UPDATE_SOLVE_STATUS',
  ERROR = 'ERROR',
  SET_CURRENT_BOX_AND_UPDATE = 'SET_CURRENT_BOX_AND_UPDATE',
  SET_CURRENT_SPEED = 'SET_CURRENT_SPEED'
}

export interface ISetGridAction {
  type: GridActionTypes.SET_GRID;
  grid: SudokuBoard;
}

export interface ISetCurrentBoxAction {
  type: GridActionTypes.SET_CURRENT_BOX;
  current: CurrentBox;
}

export interface ISetCurrentSpeed {
  type: GridActionTypes.SET_CURRENT_SPEED;
  speed: number;
}

export interface ISetSolveStatus {
  type: GridActionTypes.UPDATE_SOLVE_STATUS;
  solving: boolean;
  solveCompleted: boolean;
}

export interface ISetCurrentBoxAndUpdate {
  type: GridActionTypes.SET_CURRENT_BOX_AND_UPDATE;
  grid: SudokuBoard;
  current: CurrentBox;
  currentVal: number;
}

export interface IErrorAction {
  type: GridActionTypes.ERROR;
  errorMessage: string;
}



export type GridActions = ISetGridAction | ISetCurrentBoxAndUpdate | ISetCurrentSpeed | ISetCurrentBoxAction | ISetSolveStatus | IErrorAction;

