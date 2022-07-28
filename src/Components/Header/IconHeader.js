import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

export default function IconHeader(props) {
    const cartqty = useSelector(state => state.Cart.TotalArticle)
    const wishlistqty = useSelector(state => state.Wishlist.TotalArticle) 
    const displayName = useSelector(state => state.UiThing.logName) 
  
    return (
    <div className="wrap-icon-header flex-w flex-r-m">
      <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search" onClick={props.showSearch}>
        <i className="zmdi zmdi-search"></i>
      </div>

      <div
        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
        data-notify={cartqty}
        onClick={props.click}
      >
        <i className="zmdi zmdi-shopping-cart"></i>
      </div>
      <Link to='/wislist' className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
        data-notify={wishlistqty}>
        <i className="zmdi zmdi-favorite-outline"></i>
      </Link>
      <div
        className="login icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-cart"
      >
      {displayName ? 
        <div className="logName"><h5>{displayName.split('').splice(0,1)}</h5></div>
        :
        <Link to='/login'>
         <i className="zmdi zmdi-account"></i>
        </Link>
      }
      </div>
    </div>
  );
}
