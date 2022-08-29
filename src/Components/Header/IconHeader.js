import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { UiActions } from "../Store/UiReducer";
import { WishlistActions } from "../Store/WishlistReducer";
import { getAuth } from "firebase/auth";
import {gettingUserDetailsfromFirestore} from "../RealTimeDatabse/FirestoreDatabase"



export default function IconHeader() {
  const dispatch = useDispatch();
  const auth = getAuth();

  //below is for checking the login status
  const [authState, setAuthState] = useState({
    displayName : '',
    email : "",
    photoURL : ""
  })
  const [wishState, setwishState] = useState({
    items: [],
    TotalArticle: 0
  })

  useEffect(() => {
    dispatch(UiActions.setname({displayName : authState.displayName, email : authState.email,photoURL : authState.photoURL }))
    dispatch(WishlistActions.activeproduct({items : wishState.items, TotalArticle : wishState.TotalArticle }))
  }, [dispatch , authState,wishState])


  useEffect(() => {
    const unregisterAuthObserver = getAuth().onAuthStateChanged(user => 
      setAuthState({displayName : user.displayName,
      email : user.email,
      photoURL : user.photoURL})
      )
    
    // console.log("datas",datas);
      return () => {unregisterAuthObserver() }
    }, [])


    useEffect(() => {
      const datas = gettingUserDetailsfromFirestore().then((response)=> {
        // console.log("response is here",response);
        setwishState({
        items: response.allwishlist.items,
        TotalArticle: response.allwishlist.TotalArticle
      })})
    
      
    }, [auth.currentUser])
    
  //here it ends

    const cartqty = useSelector(state => state.Cart.TotalArticle)
    const wishlistqty = useSelector(state => state.Wishlist.TotalArticle) 
    const displayName = useSelector(state => state.UiThing.logName) 

    function onshowCart(){
      dispatch(UiActions.cartdisplay(true));
    }
    function whislistPageopen(){
      window.scroll(0,0)
    }
    function routemyprofile() {
      window.scroll(0,0)
    }
  
    return (
    <div className="wrap-icon-header flex-w flex-r-m">
      <div
        className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
        data-notify={cartqty}
        onClick={onshowCart}
      >
        <i className="zmdi zmdi-shopping-cart"></i>
      </div>
      <Link onClick={whislistPageopen} to='/wislist' className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
        data-notify={wishlistqty ? wishlistqty : 0}>
        <i className="zmdi zmdi-favorite-outline"></i>
      </Link>
      <div
        className="login icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-cart"
        onClick={routemyprofile}
      >
      {displayName ? 
        <Link to='/myprofile'>
          <div className="logName">
            <h5>{displayName.split('').splice(0,1)}</h5>
          </div>
          
        </Link>
        :
        <Link to='/login'>
         <i className="zmdi zmdi-account"></i>
        </Link>
      }
      </div>
    </div>
  );
}
