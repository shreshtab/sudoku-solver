import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import SudokuGrid from './components/SudokuGrid'
import { ResetGrid } from './actions/gridActions';
import ControlPanel from './components/ControlPanel';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetGrid());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="app-container">
      <div>
        <h1 className='title'>Sudoku Solver Visualizer</h1>
        <h4 className='subtitle'>By Shreshta Balachandar</h4>
      </div>
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <SudokuGrid />
          </div>
          <div className="col-md-4">
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
