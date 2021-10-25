import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const CreateSliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  1: '500ms',
  101: '400ms',
  201: '300ms',
  301: '200ms',
  401: '100ms',
  500: '1ms'
};

const msFormatter = (v: any) => {
  return `${501 - v}ms`
}

const consoleLog = (v: any) => {
  console.log(v)
  return
}

const SliderInput: React.FC<any> = () => {
  return (
    <div className='sliderparent'>
      Slider with tooltip and custom tip msFormatter
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
        onChange={consoleLog}
       />
    </div>
  )
}

export default SliderInput;