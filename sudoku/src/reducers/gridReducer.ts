import { Reducer } from 'redux';
import { SudokuBoard, IGridState, GridActionTypes, GridActions } from '../models/SudokuGrid';
import { deepCopyGrid, deepCopyAndReplaceAtIndex } from '../utils/utils';

export const UPDATE_GRID = 'UPDATE_GRID'

export const board: SudokuBoard = [
                            [0, 4, 3, 0, 8, 0, 2, 5, 0],
                            [6, 0, 0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 1, 0, 9, 4],
                            [9, 0, 0, 0, 0, 4, 0, 7, 0],
                            [0, 0, 0, 6, 0, 8, 0, 0, 0],
                            [0, 1, 0, 2, 0, 0, 0, 0, 3],
                            [8, 2, 0, 5, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 0, 5],
                            [0, 3, 4, 0, 9, 0, 7, 1, 0]
                          ];

export const solved: SudokuBoard = [
                [1, 4, 3, 9, 8, 6, 2, 5, 7],
                [6, 7, 9, 4, 2, 5, 3, 8, 1],
                [2, 8, 5, 7, 3, 1, 6, 9, 4],
                [9, 6, 2, 3, 5, 4, 1, 7, 8],
                [3, 5, 7, 6, 1, 8, 9, 4, 2],
                [4, 1, 8, 2, 7, 9, 5, 6, 3],
                [8, 2, 1, 5, 6, 7, 4, 3, 9],
                [7, 9, 6, 1, 4, 3, 8, 2, 5],
                [5, 3, 4, 8, 9, 2, 7, 1, 6]
              ];

export const unSolvedSimpleGrid: SudokuBoard = [
                [1, 0, 3, 9, 8, 6, 2, 5, 7],
                [6, 7, 9, 4, 2, 0, 3, 8, 1],
                [2, 8, 5, 7, 3, 1, 6, 9, 4],
                [9, 6, 2, 3, 5, 4, 1, 7, 8],
                [3, 5, 7, 6, 1, 8, 9, 4, 2],
                [4, 1, 8, 2, 7, 9, 5, 0, 3],
                [8, 2, 1, 5, 6, 7, 4, 3, 9],
                [7, 9, 6, 0, 4, 3, 8, 2, 5],
                [5, 3, 4, 8, 9, 2, 7, 1, 6]
              ];

export const initialGridState: IGridState = {
  originalGrid: deepCopyGrid(unSolvedSimpleGrid),
  grid: deepCopyGrid(unSolvedSimpleGrid),
  current: [-1,-1],
  solving: false,
  solveCompleted: false,
  errorMessage: '',
  speed: 250
}

export const gridReducer: Reducer<IGridState, GridActions> = (
  state = initialGridState,
  action
) => {
  switch (action.type) {
    case GridActionTypes.SET_GRID: {
      return {
        ...state,
        originalGrid: deepCopyGrid(action.grid),
        grid: deepCopyGrid(action.grid)
      };
    }
    case GridActionTypes.SET_CURRENT_BOX_AND_UPDATE: {
      const [rowIdx, colIdx] = action.current;
      return {
        ...state,
        current: action.current,
        grid: deepCopyAndReplaceAtIndex(state.grid, rowIdx, colIdx, action.currentVal)
      }
    }
    case GridActionTypes.SET_CURRENT_SPEED: {
      return {
        ...state,
        speed: action.speed
      }
    }
    case GridActionTypes.SET_CURRENT_BOX: {
      return {
        ...state,
        current: action.current
      };
    }
    case GridActionTypes.UPDATE_SOLVE_STATUS: {
      return {
        ...state,
        solving: action.solving,
        solveCompleted: action.solveCompleted
      };
    }
    case GridActionTypes.ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }
    default:
      return state
  }
}