import React from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const msFormatter = (v: any) => {
  return `${v} ms`
}

const consoleLog = (v: any) => {
  console.log(v)
  return
}

const SliderInput: React.FC<any> = () => {
  return (
    <div>
      Slider with tooltip and custom tip msFormatter
      <SliderWithTooltip
        tipFormatter={msFormatter}
        tipProps={{ placement: 'top', prefixCls: 'cell' }}
      />
    </div>
  )
}

export default SliderInput;