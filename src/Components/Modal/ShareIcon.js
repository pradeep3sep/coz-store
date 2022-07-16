import React from "react";

export default function ShareIcon() {
  return (
    <div className="flex-w flex-m p-l-100 p-t-40 respon7">
      <div className="flex-m bor9 p-r-10 m-r-11">
        <a
          href="/"
          className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
          data-tooltip="Add to Wishlist"
        >
          <i className="zmdi zmdi-favorite"></i>
        </a>
      </div>

      <a
        href="/"
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Facebook"
      >
        <i className="fa fa-facebook"></i>
      </a>

      <a
        href="/"
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Twitter"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        href="/"
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Google Plus"
      >
        <i className="fa fa-google-plus"></i>
      </a>
    </div>
  );
}
