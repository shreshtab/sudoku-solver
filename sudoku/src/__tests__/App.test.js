import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from 'react-dom/test-utils';

import { store } from '../reducers/store';
import App from '../App';
import { GridActionTypes } from '../models/SudokuGrid';

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

describe('Sudoku Solver App', () => {

  beforeEach(() => {
    render(<App />, { wrapper: Wrapper });
  })


  it('should be rendered', async () => {

    const title = await screen.findByText('Sudoku Solver Visualizer');
    const solveButton = screen.getByText('Solve');
    const resetButton = screen.getByText('Reset');
    const gridCells = screen.getAllByRole('cell');
    const rows = screen.getAllByRole('row');
    const parsedGridCells = gridCells.map(cell => Number(cell.innerHTML.split('>')[1].split('<')[0]))
    const zeroGridCells = parsedGridCells.filter(cell => cell === 0);

    expect(title).toBeTruthy();
    expect(solveButton).toBeTruthy();
    expect(resetButton).toBeTruthy();
    expect(parsedGridCells.length).toBe(81);
    expect(zeroGridCells.length).toBeGreaterThan(0);
    expect(rows.length).toBe(9);
  });

  it('should reset grid when clicked', async () => {

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    const resetMessage = await screen.findByText('Grid has been reset!')
    expect(resetMessage).toBeTruthy();

  });

  it('should solve grid when clicked', async () => {
    store.dispatch({ type: GridActionTypes.SET_CURRENT_SPEED, speed: 1 })
    
    const solveButton = screen.getByText('Solve');
    fireEvent.click(solveButton);
    
    const solveMessage = await screen.findByText('Solve completed!', undefined, {
      timeout: 20000
    });
    expect(solveMessage).toBeTruthy();

  });

  it('should solve grid and then reset', async () => {
    const gridCells = screen.getAllByRole('cell');
    const parsedGridCells = gridCells.map(cell => Number(cell.innerHTML.split('>')[1].split('<')[0]))
    const zeroGridCells = parsedGridCells.filter(cell => cell === 0);

    expect(parsedGridCells.length).toBe(81);
    expect(zeroGridCells.length).toBeGreaterThan(0);

    store.dispatch({ type: GridActionTypes.SET_CURRENT_SPEED, speed: 1 })
    
    const solveButton = screen.getByText('Solve');
    fireEvent.click(solveButton);
    
    const solveMessage = await screen.findByText('Solve completed!', undefined, {
      timeout: 20000
    });
    expect(solveMessage).toBeTruthy();

    const solvedGridCells = screen.getAllByRole('cell');
    const parsedSolvedGridCells = solvedGridCells.map(cell => Number(cell.innerHTML.split('>')[1].split('<')[0]))
    const zeroSolvedGridCells = parsedSolvedGridCells.filter(cell => cell === 0);

    expect(parsedSolvedGridCells.length).toBe(81);
    expect(zeroSolvedGridCells.length).toEqual(0);

    const resetButton = screen.getByText('Reset');
    fireEvent.click(resetButton);

    const resetMessage = await screen.findByText('Grid has been reset!')
    expect(resetMessage).toBeTruthy();

    const resetGridCells = screen.getAllByRole('cell');
    const parsedResetGridCells = resetGridCells.map(cell => Number(cell.innerHTML.split('>')[1].split('<')[0]))
    const zeroResetGridCells = parsedResetGridCells.filter(cell => cell === 0);

    expect(parsedResetGridCells.length).toBe(81);
    expect(zeroResetGridCells.length).toBeGreaterThan(0);
  });

  // TODO after MUI Slider Implementation

  // it('should change solve speed when dragged', () => {

  // });

})



export default {};