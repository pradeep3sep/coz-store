import React from "react";

export default function CartProduct(props) {
    const Color = props.cartproductdetail.Color;
    const Image = props.cartproductdetail.Image;
    const Price = props.cartproductdetail.Price;
    const ProductName = props.cartproductdetail.ProductName;
    const Quantity = props.cartproductdetail.Quantity;
    const Size = props.cartproductdetail.Size;
    const id = props.cartproductdetail.id;
    console.log(props,"cartdetail");

  return (
    <li className="header-cart-item flex-w flex-t m-b-12">
      <div className="header-cart-item-img">
        <img src={Image} alt="IMG" />
      </div>

      <div className="header-cart-item-txt">
        <a href="/" className="header-cart-item-name hov-cl1 trans-04">
          {ProductName}
        </a>
        <span className="header-cart-item-info">{Size}</span>
        <span className="header-cart-item-info">{Color}</span>
        <span className="header-cart-item-info">{Quantity} x ${Price}</span>
      </div>
    </li>
  );
}
