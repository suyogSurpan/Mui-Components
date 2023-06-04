import React from 'react'
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

function Checkbox() {
    const [name, setName] = useState([]);
    const getValue = (e) => {
        let data=name;
        data.push(e.target.value)
        setName(data)
        console.warn(name)
      }
  return (
    <div>
       <Checkbox color="secondary" value="Suyog" onChange={(e)=>getValue(e)}/>
      <Checkbox color="secondary" value="Pratik" onChange={(e)=>getValue(e)}/>
      <Checkbox color="secondary" value="Dhiraj" onChange={(e)=>getValue(e)}/>
      <Checkbox color="secondary" value="Vedant" indeterminate onChange={(e)=>getValue(e)}/>
      <Checkbox color="secondary" 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite />}
      onChange={(e)=>getValue(e)}/>
    </div>
  )
}

export default Checkbox
