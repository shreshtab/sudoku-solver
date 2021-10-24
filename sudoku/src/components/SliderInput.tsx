import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const CreateSliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
  1: '1ms',
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms'
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