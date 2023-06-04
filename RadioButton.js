import React,{useState} from 'react'

// import radio button
// import { Radio } from '@mui/material';
import Radio from '@mui/material/Radio';

function RadioButton() {
    const [gender, setGender] = useState('female');
    const changeGender = (e) => {
       console.warn(e.target.value)
       setGender(e.target.value)
    }
  return (
    <>
    <div>
        <span>Male</span>
      <Radio 
      value="male"
      checked={gender==='male'}
      color='secondary'
      onChange={changeGender}
      />
    </div>
    <div>
        <span>Female</span>
      <Radio 
      value="female"
      checked={gender==='female'}
      color='secondary'
      onChange={changeGender}
      />
    </div>
    </>
  )
}

export default RadioButton
