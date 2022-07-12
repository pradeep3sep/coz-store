import React, { useState} from 'react'

export default function VariationSelect(props) {
  const [isChecked , setIsChecked] = useState('')

  function slectval(e){
    props.Selected(e.target.value)
    setIsChecked(e.target.value);
  }

  return (
    <div>
      {props.data.map((val)=>{
        return  <label htmlFor={val} className={`variation ${val===isChecked?'bg-color-change':''}`} key={val}  >
                 {val} <input type="radio" name='fav_size' id={val} className='d-none' value={val} onClick={slectval} />
                </label>
      })}
    </div>
  )
}

