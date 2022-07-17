import React from "react";

export default function Hamburger(props) {
  return (
    <div className={`btn-show-menu-mobile hamburger hamburger--squeeze ${props.MobileMenu ? "is-active" : ""}`} onClick={props.toggleMobileMenu}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </div>
  );
}
