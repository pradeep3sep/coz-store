import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Article from "../Home/Article";

export default function Wishlist() {
    const wishlistProducts = useSelector(state => state.Wishlist.items)

  return (
    <div className="bg0 p-t-117 p-b-140" >
        {
            wishlistProducts.length ? 
            <div className="container">
                <div className="p-b-10">
                    <h3 className="ltext-103 cl5">Wishlist Product</h3>
                </div>
                <div className="row isotope-grid p-t-20">
                    { wishlistProducts.map((aricelDa,index)=> <Article aricelDa={aricelDa} key={`wh_${index}`} />) }
                </div>
            </div>
            :
            <p className="text-center p-t-200 p-b-200">You have no items in your Wishlist. <Link to='/product'>Click</Link> here to continue shopping.</p>
        }
    </div>
  );
}
