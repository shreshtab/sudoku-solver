import { board, solved, gridReducer, initialGridState } from "../../reducers/gridReducer";
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
  current: [0,0],
  currentVal: 1
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
      [1, 4, 3, 0, 8, 0, 2, 5, 0],
      [6, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 9, 4],
      [9, 0, 0, 0, 0, 4, 0, 7, 0],
      [0, 0, 0, 6, 0, 8, 0, 0, 0],
      [0, 1, 0, 2, 0, 0, 0, 0, 3],
      [8, 2, 0, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 3, 4, 0, 9, 0, 7, 1, 0]
    ];

    expect(gridReducer(initialGridState, updateCurrentBoxValAction)).toEqual({
      ...initialGridState,
      current: [0,0],
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