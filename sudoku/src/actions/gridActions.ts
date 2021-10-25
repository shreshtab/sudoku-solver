import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ISetGridAction, ISetCurrentBoxAndUpdate, ISetCurrentBoxAction, GridActionTypes } from '../models/SudokuGrid';
import { IAppState } from "../models";
import { SudokuBoard, CurrentBox } from "../models/SudokuGrid";
import { solveSudoku } from "../algorithms/solveSudoku";
import { getPuzzle } from "../utils/utils";

export const SolveGrid: ActionCreator<ThunkAction<Promise<any>, IAppState, null, ISetCurrentBoxAndUpdate>> = () => {
  return async (dispatch: Dispatch, getState) => {
    try {
      const state = getState();
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
      const newPuzzle: SudokuBoard = getPuzzle();
      dispatch({type: GridActionTypes.SET_GRID, grid: newPuzzle});
      dispatch({type: GridActionTypes.UPDATE_SOLVE_STATUS, solving: false, solveCompleted: false});
    } catch (err) {
        dispatch({type: GridActionTypes.ERROR, errorMessage: `Unable to reset puzzle. Error: ${err}`});
    }
  }
}

export const SetAndUpdateCurrentBox: ActionCreator<ThunkAction<Promise<any>, IAppState, null, ISetCurrentBoxAction>> = (currentBox: CurrentBox, boxVal: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({type: GridActionTypes.SET_CURRENT_BOX_AND_UPDATE, current: currentBox, currentVal: boxVal})
    } catch (err) {
      dispatch({type: GridActionTypes.ERROR, errorMessage: `Unable to update grid. Error: ${err}`});
    }
  }
}