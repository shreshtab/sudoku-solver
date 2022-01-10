import { solved, gridReducer, initialGridState } from "../../reducers/gridReducer";
import { SudokuBoard, GridActionTypes, ISetGridAction, ISetCurrentBoxAction, ISetCurrentSpeed, ISetSolveStatus, ISetCurrentBoxAndUpdate, IErrorAction } from '../../models/SudokuGrid';

const newGridAction: ISetGridAction = {
  type: GridActionTypes.SET_GRID,
  grid: solved
}

const updateCurrentBoxAction: ISetCurrentBoxAction = {
  type: GridActionTypes.SET_CURRENT_BOX,
  current: [1,1]
}

const updateSpeedAction: ISetCurrentSpeed = {
  type: GridActionTypes.SET_CURRENT_SPEED,
  speed: 2
}

const updateSolveStatusAction: ISetSolveStatus = {
  type: GridActionTypes.UPDATE_SOLVE_STATUS,
  solving: true,
  solveCompleted: true
}

const updateCurrentBoxValAction: ISetCurrentBoxAndUpdate = {
  type: GridActionTypes.SET_CURRENT_BOX_AND_UPDATE,
  current: [0,1],
  currentVal: 4
}

const updateErrorMessageAction: IErrorAction = {
  type: GridActionTypes.ERROR,
  errorMessage: "Test Error"
}

describe('grid reducer', () => {
  
  it('returns the initial state', () => {
    expect(gridReducer(undefined, {type: GridActionTypes.DEFAULT})).toEqual(initialGridState);
  });

  it('updates the grid and original grid', () => {
    expect(gridReducer(initialGridState, newGridAction)).toEqual({
      ...initialGridState,
      originalGrid: solved,
      grid: solved
    });
  });

  it('updates the current box', () => {
    expect(gridReducer(initialGridState, updateCurrentBoxAction)).toEqual({
      ...initialGridState,
      current: [1,1]
    })
  });

  it('updates the current speed', () => {
    expect(gridReducer(initialGridState, updateSpeedAction)).toEqual({
      ...initialGridState,
      speed: 2
    })
  });

  it('updates the solving and solve completed status', () => {
    expect(gridReducer(initialGridState, updateSolveStatusAction)).toEqual({
      ...initialGridState,
      solving: true,
      solveCompleted: true
    })
  });

  it('updates current box and value in the current box', () => {
    
    const updatedBoard: SudokuBoard = [
      [1, 4, 3, 9, 8, 6, 2, 5, 7],
      [6, 7, 9, 4, 2, 0, 3, 8, 1],
      [2, 8, 5, 7, 3, 1, 6, 9, 4],
      [9, 6, 2, 3, 5, 4, 1, 7, 8],
      [3, 5, 7, 6, 1, 8, 9, 4, 2],
      [4, 1, 8, 2, 7, 9, 5, 0, 3],
      [8, 2, 1, 5, 6, 7, 4, 3, 9],
      [7, 9, 6, 0, 4, 3, 8, 2, 5],
      [5, 3, 4, 8, 9, 2, 7, 1, 6]
    ];

    expect(gridReducer(initialGridState, updateCurrentBoxValAction)).toEqual({
      ...initialGridState,
      current: [0,1],
      grid: updatedBoard
    })
  });

  it('updates the error message', () => {
    expect(gridReducer(initialGridState, updateErrorMessageAction)).toEqual({
      ...initialGridState,
      errorMessage: "Test Error"
    })
  });
})