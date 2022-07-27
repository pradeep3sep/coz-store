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
        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-facebook"></i>
      </a>

      <a
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Twitter"
        href="https://twitter.com/share?ref_src=twsrc%5Etfw" 
        data-show-count="false"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter"></i>
      </a>

      <a
        href={`whatsapp://send?text=This is WhatsApp sharing example using link`}
        data-action="share/whatsapp/share"
        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
        data-tooltip="Whatsapp"
      >
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  );
}
