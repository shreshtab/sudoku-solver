import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import SudokuGrid from './components/SudokuGrid'
import { SolveGrid, ResetGrid } from './actions/gridActions';
import { IAppState } from './models';
import SliderInput from './components/SliderInput';

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
    <div className="app-container">
      <div>
        <h1 className='title'>Sudoku Solver</h1>
      </div>

      <div className='container'>
        <div className="row">
          <div className="col-md-8">
            <SudokuGrid />
          </div>
          <div className="col-md-4">
            <button type="button" onClick={() => solveGrid()} disabled={solving || solveCompleted}>Solve Grid</button>
            <br />
            <button type="button" onClick={() => resetGrid()} disabled={solving}>Reset Grid</button>
            <SliderInput />    
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
