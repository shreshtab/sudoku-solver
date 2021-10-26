import { Reducer } from 'redux';
import { SudokuBoard, IGridState, GridActionTypes, GridActions } from '../models/SudokuGrid';
import { deepCopyGrid, deepCopyAndReplaceAtIndex } from '../utils/utils';

export const UPDATE_GRID = 'UPDATE_GRID'

const board: SudokuBoard = [ [0, 4, 3, 0, 8, 0, 2, 5, 0],
                [6, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 9, 4],
                [9, 0, 0, 0, 0, 4, 0, 7, 0],
                [0, 0, 0, 6, 0, 8, 0, 0, 0],
                [0, 1, 0, 2, 0, 0, 0, 0, 3],
                [8, 2, 0, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 5],
                [0, 3, 4, 0, 9, 0, 7, 1, 0] ];

// const deepCopyArray = ()

const initialGridState: IGridState = {
  originalGrid: deepCopyGrid(board),
  grid: deepCopyGrid(board),
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