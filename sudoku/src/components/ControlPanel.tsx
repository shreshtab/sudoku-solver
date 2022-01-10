import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Slider input, solve button, reset button
import { SolveGrid, ResetGrid } from '../actions/gridActions';
import { IAppState } from '../models';
import SliderInput from './SliderInput';


const ControlPanel: React.FC<any> = () => {
  const dispatch = useDispatch();
  const solving = useSelector((state: IAppState) => state.gridState.solving);
  const solveCompleted = useSelector((state: IAppState) => state.gridState.solveCompleted);

  useEffect(() => {

    if (!solving && solveCompleted) {
      // Enqueue snackbar for solve completed

    }

    if (!solving && !solveCompleted) {
      // Enqueue snackbar for reset
    }

  }, [solveCompleted, solving])

  const solveGrid = () => {
    dispatch(SolveGrid());
  };

  const resetGrid = () => {
    dispatch(ResetGrid());
  }

  return (
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
        <div className='slider-parent col-12'>
          <SliderInput />
        </div>
        <div className='legend col-12'>
          Speed (slow to fast)
        </div>
      </div>
    </div>
  )
}

export default ControlPanel;