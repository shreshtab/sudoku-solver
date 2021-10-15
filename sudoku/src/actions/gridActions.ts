import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IGridState, ISetGridAction, GridActionTypes } from '../models/SudokuGrid';
import { SudokuBoard } from "../models/SudokuGrid";
import { solveSudoku } from "../algorithms/solveSudoku";

const solved = [
[1, 4, 3, 9, 8, 6, 2, 5, 7],
[6, 7, 9, 4, 2, 5, 3, 8, 1],
[2, 8, 5, 7, 3, 1, 6, 9, 4],
[9, 6, 2, 3, 5, 4, 1, 7, 8],
[3, 5, 7, 6, 1, 8, 9, 4, 2],
[4, 1, 8, 2, 7, 9, 5, 6, 3],
[8, 2, 1, 5, 6, 7, 4, 3, 9],
[7, 9, 6, 1, 4, 3, 8, 2, 5],
[5, 3, 4, 8, 9, 2, 7, 1, 6]];

export const SolveGrid: ActionCreator<ThunkAction<Promise<any>, IGridState, null, ISetGridAction>> = (board: SudokuBoard) => {
  return async (dispatch: Dispatch, getState) => {
    try {
      // Call solveSudoku
      // const { grid } = getState();
      console.log("In reducer")
      // dispatch({type: GridActionTypes.SET_GRID, grid: solved})
      if (await solveSudoku(board, dispatch)) {
        console.log("Solved");
        dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: true});
        dispatch({type: GridActionTypes.SET_CURRENT_BOX, current: [-1, -1]})
        // dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: true});
        // dispatch({type: GridActionTypes.ERROR, errorMessage: 'Unable to solve puzzle'});
      }
      
    } catch (err) {
        dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: true});
        dispatch({type: GridActionTypes.ERROR, errorMessage: `Unable to solve puzzle. Error: ${err}`});
    }
  }
}