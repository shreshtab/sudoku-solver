import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISetGridAction, ISetCurrentBoxAndUpdate, GridActionTypes } from '../models/SudokuGrid';
import { IAppState } from "../models";
import { SudokuBoard } from "../models/SudokuGrid";
import { solveSudoku } from "../algorithms/solveSudoku";

// const solved = [
// [1, 4, 3, 9, 8, 6, 2, 5, 7],
// [6, 7, 9, 4, 2, 5, 3, 8, 1],
// [2, 8, 5, 7, 3, 1, 6, 9, 4],
// [9, 6, 2, 3, 5, 4, 1, 7, 8],
// [3, 5, 7, 6, 1, 8, 9, 4, 2],
// [4, 1, 8, 2, 7, 9, 5, 6, 3],
// [8, 2, 1, 5, 6, 7, 4, 3, 9],
// [7, 9, 6, 1, 4, 3, 8, 2, 5],
// [5, 3, 4, 8, 9, 2, 7, 1, 6]];

const board: SudokuBoard = [ [0, 4, 3, 0, 8, 0, 2, 5, 0],
                [6, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 9, 4],
                [9, 0, 0, 0, 0, 4, 0, 7, 0],
                [0, 0, 0, 6, 0, 8, 0, 0, 0],
                [0, 1, 0, 2, 0, 0, 0, 0, 3],
                [8, 2, 0, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 3, 4, 0, 9, 0, 7, 1, 0] ];

export const SolveGrid: ActionCreator<ThunkAction<Promise<any>, IAppState, null, ISetCurrentBoxAndUpdate>> = () => {
  return async (dispatch: Dispatch, getState) => {
    try {
      const state = getState();
      console.log("In reducer")
      console.log(state)
      dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: true, solveCompleted: false});
      if (await solveSudoku(state.gridState.grid, dispatch)) {
        console.log("Solved");
        dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: true});
        dispatch({type: GridActionTypes.SET_CURRENT_BOX, current: [-1, -1]});
      }
    } catch (err) {
        dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: true});
        dispatch({type: GridActionTypes.ERROR, errorMessage: `Unable to solve puzzle. Error: ${err}`});
    }
  }
}

export const ResetGrid: ActionCreator<ThunkAction<Promise<any>, IAppState, null, ISetGridAction>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({type: GridActionTypes.SET_GRID, grid: board});
      dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: false});
    } catch (err) {
        dispatch({type: GridActionTypes.ERROR, errorMessage: `Unable to reset puzzle. Error: ${err}`});
    }
  }
}