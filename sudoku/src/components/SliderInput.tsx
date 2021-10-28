import React from 'react';
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import { GridActionTypes } from '../models/SudokuGrid';

const CreateSliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  1: '500ms',
  101: '400ms',
  201: '300ms',
  301: '200ms',
  401: '100ms',
  500: '1ms'
};



const SliderInput: React.FC<any> = () => {

  const dispatch = useDispatch();
  
  const msFormatter = (v: any) => {
    return `${501 - v}ms`
  }
  
  const updateSpeed = (v: number) => {
    dispatch({type: GridActionTypes.SET_CURRENT_SPEED, speed: 501 - v})
    return
  }


  return (
    <div>
      <CreateSliderWithTooltip
        min={1}
        max={500}
        defaultValue={251}
        railStyle={{ backgroundColor: 'rgb(252, 206, 147)', height: 5 }}
        dotStyle={{ borderColor: 'purple', backgroundColor: 'green', border: '1px solid black' }}
        handleStyle={{
          borderColor: 'red',
          height: 14,
          width: 14,
          marginLeft: 0,
          marginTop: -5,
          backgroundColor: 'black',
        }}
        className='slider'
        included={false}
        marks={marks}
        tipFormatter={msFormatter}
        onChange={updateSpeed}
       />
    </div>
  )
}

export default SliderInput;