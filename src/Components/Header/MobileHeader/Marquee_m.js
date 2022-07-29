import React from "react";
import { Link } from "react-router-dom";

export default function Marquee_m() {
  return (
    <ul className="topbar-mobile">
      <li>
        <div className="left-top-bar">
          Free shipping for standard order over $100
        </div>
      </li>

      <li>
        <div className="right-top-bar flex-w h-full">
          <Link to='/about' className="flex-c-m p-lr-10 trans-04">
            Help & FAQs
          </Link>

          {/* <a href="/" className="flex-c-m p-lr-10 trans-04">
            My Account
          </a> */}

          <a href="/" className="flex-c-m p-lr-10 trans-04">
            EN
          </a>

          <a href="/" className="flex-c-m p-lr-10 trans-04">
            USD
          </a>
        </div>
      </li>
    </ul>
  );
}
