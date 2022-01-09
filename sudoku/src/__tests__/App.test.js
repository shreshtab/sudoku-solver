import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from 'react-dom/test-utils';

import { store } from '../reducers/store';
import App from '../App';
import { GridActionTypes } from '../models/SudokuGrid';
import * as utils from '../utils/utils';
import { sleep } from '../utils/utils';
import { debug } from "console";

const board = [
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

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

// const getPuzzleSpy = jest.spyOn(utils, 'getPuzzle');
// getPuzzleSpy.mockReturnValue(board)

describe('Sudoku Solver App', () => {

  beforeEach(() => {
    render(<App />, { wrapper: Wrapper });
  })


  it('should be rendered', async () => {

    const title = await screen.findByText('Sudoku Solver Visualizer');
    const solveButton = screen.getByText('Solve');
    const resetButton = screen.getByText('Reset');
    

    expect(title).toBeTruthy();
    expect(solveButton).toBeTruthy();
    expect(resetButton).toBeTruthy();

  })

  it('should reset grid when clicked', async () => {

    const resetButton = screen.getByText('Reset');

    fireEvent.click(resetButton)
    await act(() => sleep(5000));

  });

  it('should solve grid when clicked', async () => {
    store.dispatch({ type: GridActionTypes.SET_CURRENT_SPEED, speed: 1 })
    const solveButton = screen.getByText('Solve');
    fireEvent.click(solveButton);
    await act(() => sleep(15000));

  });

  it('should change solve speed when dragged', () => {

  });

})



export default {};