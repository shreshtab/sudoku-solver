import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const CreateSliderWithTooltip = createSliderWithTooltip(Slider);

const msFormatter = (v: any) => {
  return `${v}ms`
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
        className='slider'
        tipFormatter={msFormatter}
        onChange={consoleLog}
       />
    </div>
  )
}

export default SliderInput;