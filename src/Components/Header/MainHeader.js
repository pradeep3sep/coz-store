import React, { useState } from 'react'
import Cart from './Cart'
import Header from './Header'

export default function MainHeader() {
  const [showcart, seshowcart] = useState(false);
  const showTheCart = () => {
    seshowcart(true);
  }
  const hideTheCart = () => {
    seshowcart(false);
    console.log("true kar dia");
  }
  return (
    <div>
        <Header onClick={showTheCart}/>
        <Cart onClick={[showcart, hideTheCart]} />
    </div>
  )
}
