import React from "react";

export default function FeaturedProducts() {
  return (
    <div className="p-t-65">
      <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>

      <ul>
        <li className="flex-w flex-t p-b-30">
          <a href="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
            <img src={require("../../images/product-min-01.jpg")} alt="PRODUCT" />
          </a>

          <div className="size-215 flex-col-t p-t-8">
            <a href="/" className="stext-116 cl8 hov-cl1 trans-04">
              White Shirt With Pleat Detail Back
            </a>

            <span className="stext-116 cl6 p-t-20">₹19.00</span>
          </div>
        </li>

        <li className="flex-w flex-t p-b-30">
          <a href="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
            <img src={require("../../images/product-min-02.jpg")} alt="PRODUCT" />
          </a>

          <div className="size-215 flex-col-t p-t-8">
            <a href="/" className="stext-116 cl8 hov-cl1 trans-04">
              Converse All Star Hi Black Canvas
            </a>

            <span className="stext-116 cl6 p-t-20">₹39.00</span>
          </div>
        </li>

        <li className="flex-w flex-t p-b-30">
          <a href="/" className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
            <img src={require("../../images/product-min-03.jpg")} alt="PRODUCT" />
          </a>

          <div className="size-215 flex-col-t p-t-8">
            <a href="/" className="stext-116 cl8 hov-cl1 trans-04">
              Nixon Porter Leather Watch In Tan
            </a>

            <span className="stext-116 cl6 p-t-20">₹17.00</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
