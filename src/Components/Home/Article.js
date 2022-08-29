import React from "react";
import swal from "sweetalert";
import {useSelector} from "react-redux";
import { Image, Shimmer } from 'react-shimmer'
import { useDispatch} from "react-redux";
import { WishlistActions } from '../Store/WishlistReducer';
import { useState } from "react";
import CurrencyValue from "../Multicurrency/CurrencyValue";
import { addItemWishlist, removeItemWishlist } from '../RealTimeDatabse/FirestoreDatabase'

export default function Article(props) {
    let passing = props.aricelDa;
    
    const dispatch = useDispatch();


    const wishlistitems = useSelector(state => state.Wishlist.items)
    const checkvisibility = wishlistitems.find((wishitem)=> wishitem.id === passing.id)
    console.log("wishlistitems",wishlistitems.find((wishitem)=> wishitem.id === passing.id));
    const [iconCheck, setfirst] = useState(checkvisibility)

    function clickeArticle(){
      props.clickedProduct(passing.id)
      props.showModal();
    }
    const wishlistqty = useSelector(state => state.Wishlist)
    

    function addwhishlist(){
      dispatch(WishlistActions.activeproduct({product : passing, type: "add"}));
      const datacheck = addItemWishlist({TotalArticle : wishlistqty.TotalArticle + 1, items : [passing, ...wishlistqty.items]})
      datacheck.then((error)=> console.log("error",error))
      swal("Congratulations!", "Your product has been added to the Wishlist!", "success");
      // setfirst(true)
    }
    

    function removewhishlist(){
      dispatch(WishlistActions.activeproduct({product : passing, type: "remove"}));
      removeItemWishlist(passing)
      swal("Your product has been remove from the Wishlist!");
      setfirst(false)
    }

    const pathcheck = ()=> window.location.pathname === '/wislist'

  return (
    <div className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${passing.gender}`}>
      {/* <!-- Block2 --> */}
      <div className="block2">
        <div className="block2-pic hov-img0">
          {/* <img src={passing.image[0]} alt="IMG-PRODUCT" /> */}
          <Image
            src={passing.image[0]}
            fallback={<Shimmer width={277} height={344} />}
          />

          <a
            role="button"
            aria-pressed="false"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
            onClick={clickeArticle}
          >
            Quick View
          </a>
        </div>

        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <a
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {passing.productName}
            </a>

            <span className="stext-105 cl3">
              <CurrencyValue price={passing.price}/>
            </span>
          </div>

          <div  className="block2-txt-child2 flex-r p-t-3">

            {
              iconCheck || checkvisibility ?
                <i onClick={removewhishlist} className="zmdi zmdi-close"></i>
              :
              <a onClick={addwhishlist}
                  className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                >
                  <img
                    className="icon-heart1 dis-block trans-04"
                    src={require("../../images/icons/icon-heart-01.png")}
                    alt="ICON"
                  />
                  <img
                    className="icon-heart2 dis-block trans-04 ab-t-l"
                    src={require("../../images/icons/icon-heart-02.png")}
                    alt="ICON"
                  />
                </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
