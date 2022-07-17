import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/logo-01.png";
import {useSelector} from "react-redux";

export default function Logo() {
  const isMobile = useSelector(state => state.UiThing.isMobile)
  return (
    <Link to="/" className={isMobile ? "logo-mobile" : "logo"}>
      <img src={logo} alt="IMG-LOGO" />
    </Link>
  );
}
