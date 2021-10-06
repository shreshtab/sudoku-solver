import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IGridState } from '../models/SudokuGrid';

export enum GridActionTypes {
  SET_GRID = 'SET_GRID',
  SOLVE_GRID = 'SOLVE_GRID',
  RESET_GRID = 'RESET_GRID',
  LOAD_GRID = 'LOAD_GRID',
  ERROR = 'ERROR'
}

