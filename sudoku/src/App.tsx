import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SudokuGrid from './components/SudokuGrid'
import { SolveGrid, ResetGrid } from './actions/gridActions';
import { IAppState } from './models';

const App = () => {
  const dispatch = useDispatch();
  const solving = useSelector((state: IAppState) => state.gridState.solving);
  const solveCompleted = useSelector((state: IAppState) => state.gridState.solveCompleted);

  useEffect(() => {
    dispatch(ResetGrid());
  }, [])
  
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
