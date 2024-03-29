import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { UiActions } from "../Store/UiReducer";
import { WishlistActions } from "../Store/WishlistReducer";
import { getAuth } from "firebase/auth";
import { CartActions } from "../Store/CartProdcutReducer";
import {gettingUserDetailsfromFirestore} from "../RealTimeDatabse/FirestoreDatabase"
import { Encription, Decription } from "../Encryption/Encription";


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
  const [cart, setcart] = useState({
    items: [],
    TotalArticle: 0,
    TotalPrice: 0,
    currentCurrency: {
      setvalue: 'INR(₹)',
      symbol: '₹',
      upiprice: 'mrpprice'
    }
  })

  useEffect(() => {
    dispatch(UiActions.setname({displayName : authState.displayName, email : authState.email,photoURL : authState.photoURL }))
    dispatch(WishlistActions.activeproduct({items : wishState.items, TotalArticle : wishState.TotalArticle }))
    dispatch(CartActions.setData(cart))
  }, [dispatch , authState,wishState,cart])


  useEffect(() => {
    const unregisterAuthObserver = getAuth().onAuthStateChanged(user => {
      if (user) {
        setAuthState({displayName : user.displayName,
          email : user.email,
          photoURL : user.photoURL})
        
          const encryptedData =  Encription(displayName,"cozstore");
          localStorage.setItem("name", encryptedData);
      }
      
    }
      )
    
      return () => {unregisterAuthObserver() }
    }, [])


    useEffect(() => {
      const datas = gettingUserDetailsfromFirestore().then((response)=> {
        if (response) {
          setwishState({
            items: response.allwishlist.items,
            TotalArticle: response.allwishlist.TotalArticle
          })
  
          setcart({
            items: response.Cart.items,
            TotalArticle: response.Cart.TotalArticle,
            TotalPrice: response.Cart.TotalPrice,
            currentCurrency: {
              setvalue: 'INR(₹)',
              symbol: '₹',
              upiprice: 'mrpprice'
            }
          })
        }
    })
    
      
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
