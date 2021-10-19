import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SudokuGrid from './components/SudokuGrid'
import { SolveGrid, ResetGrid } from './actions/gridActions';
import { IAppState } from './models';

// const board : SudokuBoard = [ [0, 4, 3, 0, 8, 0, 2, 5, 0],
//                 [6, 0, 0, 0, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 1, 0, 9, 4],
//                 [9, 0, 0, 0, 0, 4, 0, 7, 0],
//                 [0, 0, 0, 6, 0, 8, 0, 0, 0],
//                 [0, 1, 0, 2, 0, 0, 0, 0, 3],
//                 [8, 2, 0, 5, 0, 0, 0, 0, 0],
//                 [0, 0, 0, 0, 0, 0, 0, 0, 5],
//                 [0, 3, 4, 0, 9, 0, 7, 1, 0] ];

const App = () => {
  const dispatch = useDispatch();
  const solving = useSelector((state: IAppState) => state.gridState.solving);
  const solveCompleted = useSelector((state: IAppState) => state.gridState.solveCompleted);
  
  const solveGrid = () => {
    dispatch(SolveGrid());
  };

  const resetGrid = () => {
    dispatch(ResetGrid());
  }

  return (
    <div className="App">
      Hello from the App component!
      <SudokuGrid />
      <button type="button" onClick={() => solveGrid()} disabled={solving || solveCompleted}>Solve Grid</button>
      <br />
      <button type="button" onClick={() => resetGrid()} disabled={solving}>Reset Grid</button>
    </div>
  );
}

export default App;
