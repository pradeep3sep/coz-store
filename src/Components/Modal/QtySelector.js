import React, {useState, useEffect} from "react";


export default function QtySelector(props) {
  const [qty, setqty] = useState(1)
  
  useEffect(() => {
    props.qtySelected(qty)
  
  }, [qty])
  

  function qtyIncrement(){
    setqty((old)=>{
      return old + 1
    })
  }

  function qtyDecrement(){
    setqty((old)=>{
      return old - 1
    })
  }

  return (
    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
      <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={qtyDecrement}>
        <i className="fs-16 zmdi zmdi-minus"></i>
      </div>

      <input
        className="mtext-104 cl3 txt-center num-product"
        type="number"
        name="num-product"
        value={qty}
        readOnly={true}
      />

      <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={qtyIncrement}>
        <i className="fs-16 zmdi zmdi-plus"></i>
      </div>
    </div>
  );
}
