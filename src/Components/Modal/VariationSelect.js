import { useState, useEffect } from "react";

export default function VariationSelect(props) {
  const [clicked, setclicked] = useState()
  console.log(clicked,'im clicked');
  
  function clickeding(){
      setclicked(props.value)
  }
  
  return (
    <div>
      <label className={`variation ${clicked ? "bg-color-change": ''}`}>
        {props.value} <input type="radio" className="d-none"  onClick={clickeding} name='favSelect' />
      </label>
    </div>
  );
}
