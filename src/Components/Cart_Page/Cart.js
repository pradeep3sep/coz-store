import React from "react";
import BreadCrum from "./BreadCrum";
import CartTotal from "./CartTotal";
import Coupan from "./Coupan";
import ProductTable from "./ProductTable";

export default function Cart() {
  const cart_list_items = [
    {
      gender: "women",
      image: require("../../images/item-cart-04.jpg"),
      productName: "Fresh Strawberries",
      price: "36.00",
    },
    {
        gender: "women",
        image: require("../../images/item-cart-05.jpg"),
        productName: "Lightweight Jacket",
        price: "16.00",
      },
  ];
  return (
    <div>
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2">Your Cart</span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>

          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-01.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="google.com"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    White Shirt Pleat
                  </a>

                  <span className="header-cart-item-info">1 x $19.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-02.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="google.com"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Converse All Star
                  </a>

                  <span className="header-cart-item-info">1 x $39.00</span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-03.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="google.com"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Nixon Porter Leather
                  </a>

                  <span className="header-cart-item-info">1 x $17.00</span>
                </div>
              </li>
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>

              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>

                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrum/>
      <form className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2"></th>
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    {cart_list_items.map((cart_list_item,index)=>{
                      return  <ProductTable data={cart_list_item} key={`pt_${index}`} />
                    })}
                  </table>
                </div>
                <Coupan/>
              </div>
            </div>
            <CartTotal/>
          </div>
        </div>
      </form>
    </div>
  );
}
