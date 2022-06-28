import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import Header from './Header'

export default function MainHeader() {
  const [showcart, seshowcart] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      let scrollDist = window.scrollY
      if (scrollDist > 40) {
        document.querySelector(".container-menu-desktop").classList.add('fix-menu-desktop');
        document.querySelector('.wrap-menu-desktop').style.top = "0px"
      } else {
        document.querySelector(".container-menu-desktop").classList.remove('fix-menu-desktop')
        document.querySelector('.wrap-menu-desktop').style.top = "40px"
      }
    })
  }, [])
  
  const showTheCart = () => {
    seshowcart(true);
  }
  const hideTheCart = () => {
    seshowcart(false);
  }
  return (
    <div>
        <Header onClick={showTheCart}/>
        <Cart onClick={[showcart, hideTheCart]} />
    </div>
  )
}
