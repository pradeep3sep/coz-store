import React from "react";
import { Link } from "react-router-dom";
import Selectcurrency from "../Multicurrency/Selectcurrency";

export default function Marquee() {
  return (
    <div className="top-bar">
      <div className="content-topbar flex-sb-m h-full container">
        <div className="left-top-bar">
          Free shipping for standard order over ₹100
        </div>

        <div className="right-top-bar flex-w h-full">
          <Link to='/about' className="flex-c-m trans-04 p-lr-25">
            Help & FAQs
          </Link>

          <Link className="flex-c-m trans-04 p-lr-25" to='/'>
            EN
          </Link>
          <Selectcurrency/>
        </div>
      </div>
    </div>
  );
}
