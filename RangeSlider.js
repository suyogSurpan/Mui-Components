import { Slider } from '@mui/material'
import React, { useState } from 'react'

function RangeSlider() {
    const [val, setVal]= useState([30,40])
    const updateRange = (e, data) => {
        setVal(data)
    }
  return (
    <div style={{width:300, margin:30}}>
      <Slider 
      value={val}
      onChange={updateRange}/>
    </div>
  )
}

export default RangeSlider
