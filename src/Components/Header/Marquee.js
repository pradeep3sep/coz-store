import React from "react";
import { Link } from "react-router-dom";

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
          

          {/* <a href="/" className="flex-c-m trans-04 p-lr-25">
            My Account
          </a> */}

          <a href="/" className="flex-c-m trans-04 p-lr-25">
            EN
          </a>

          <a href="/" className="flex-c-m trans-04 p-lr-25">
            USD
          </a>
        </div>
      </div>
    </div>
  );
}
