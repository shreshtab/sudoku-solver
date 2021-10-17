import { Reducer } from 'redux';
import { SudokuBoard, IGridState, GridActionTypes, GridActions } from '../models/SudokuGrid';


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


const initialGridState: IGridState = {
  originalGrid: JSON.parse(JSON.stringify(board)),
  grid: board.slice(),
  current: [-1,-1],
  solving: false,
  solveCompleted: false,
  errorMessage: ''
}

export const gridReducer: Reducer<IGridState, GridActions> = (
  state = initialGridState,
  action
) => {
  switch (action.type) {
    case GridActionTypes.SET_GRID: {
      return {
        ...state,
        originalGrid: action.grid.slice(),
        grid: action.grid.slice()
      };
    }
    case GridActionTypes.UPDATE_BOX: {
      let newGrid = [...state.grid];
      const [rowIdx, colIdx] = state.current;
      let updatedGrid = Object.assign([...newGrid], {
        [rowIdx]: Object.assign([...newGrid[rowIdx]], {
          [colIdx]: action.currentVal
        })
      })
      // newGrid[rowIdx][colIdx] = action.currentVal;
      return {
        ...state,
        grid: updatedGrid
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