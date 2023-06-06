import React from 'react'
import { Slider } from '@mui/material'

function SliderButton() {
  const mark = [
    {
      value: 0,
      label: "Start"
    },
    {
      value: 100,
      label: "Middle"
    },
    {
      value: 200,
      label: "End"
    },
    {
      value: 50,
      label: "Custom"
    }
  ]
  const getValue = (e, val) => {
    console.warn(val)
  }
  return (
    <div style={{height:300, margin:20}}>
      <h1> Slider </h1>
      <Slider 
      color='secondary'
      defaultValue={40}
      max={200}
      step={50}
      marks={mark}
      valueLabelDisplay='auto'
      onChange={getValue}
      orientation='vertical'
      />
    </div>
  )
}

export default SliderButton
