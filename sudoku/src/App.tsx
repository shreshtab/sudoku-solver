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
        <div className="row justify-content-center">
          <div className="col-md-8">
            <SudokuGrid />
          </div>
          <div className="col-md-4">
            <div className="control-panel">
              <div className="row justify-content-evenly">
                <div className="solve-button col-4 button">
                  <button type="button" className="btn btn-primary" onClick={() => solveGrid()} disabled={solving || solveCompleted}>Solve</button>
                </div>
                <div className="reset-button col-4 button">
                  <button type="button" className="btn btn-success" onClick={() => resetGrid()} disabled={solving}>Reset</button>
                </div>
              </div>
              <br />
              <div className="row justify-content-center">
                <div className='slider-parent col-10'>
                  <SliderInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
