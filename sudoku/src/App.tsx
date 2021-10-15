import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import SudokuGrid from './components/SudokuGrid'
import { IAppState } from './models';
import { SolveGrid } from './actions/gridActions';

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

  const sudokuGrid = useSelector((state: IAppState) => state.gridState.grid)
  
  const dispatch = useDispatch();

  const solveGrid = () => {
    console.log("dispatching")
    dispatch(SolveGrid([...sudokuGrid]));
  };

  return (
    <div className="App">
      Hello from the App component!
      <SudokuGrid />
      <button type="button" onClick={() => solveGrid()}>Solve Grid</button>
    </div>
  );
}

export default App;
