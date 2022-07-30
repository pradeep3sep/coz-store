import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MenuMobile() {
  return (
    <ul className="main-menu-m">
      <li>
        {/* <a href="index.html">Home</a> */}
        <NavLink to='/'>Home</NavLink>
        <ul className="sub-menu-m">
          <li>
            <a href="index.html">Homepage 1</a>
          </li>
          <li>
            <a href="home-02.html">Homepage 2</a>
          </li>
          <li>
            <a href="home-03.html">Homepage 3</a>
          </li>
        </ul>
        <span className="arrow-main-menu-m">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </li>

      <li>
        <NavLink to='/product'>Shop</NavLink>
      </li>

      <li>
          <NavLink className="label1 rs1" to='/cart'>Cart</NavLink>
      </li>

      <li>
      <NavLink to='/blog'>Blog</NavLink>
      </li>

      <li>
      <NavLink to='/about'>About</NavLink>
      </li>

      <li>
      <NavLink to='/contact'>Contact</NavLink>
      </li>
    </ul>
  );
}
