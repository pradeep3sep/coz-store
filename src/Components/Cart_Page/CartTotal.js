import React from "react";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import displayRazorpay from "../testRazorpay/utils/backendpaymentcall";
import swal from "sweetalert";
import { useState } from 'react';
import Pincode from "./Pincode";

export default function CartTotal(props) {

  const [orderId, setorderId] = useState()

  const cartTotalPrice = useSelector(state => state.Cart.TotalPrice)
  const userName = useSelector(state => state.UiThing.logName)
  const genReceipt = userName + Math.round(Math.random()*10000000)
  const userEmail = useSelector(state => state.UiThing.logEmail)
  const TotalPrice = useSelector(state => state.Cart.TotalPrice)

  var options = {
    "key": process.env.REACT_APP_KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": TotalPrice * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "CozaStore Corp",
    "description": "Free Transaction, click any mode",
    "image": "https://firebasestorage.googleapis.com/v0/b/coz-store.appspot.com/o/pin.png?alt=media&token=00b6b752-7f94-4182-8702-c4e022964e65",
    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
      swal({
        title : "Congratulations! Your Order has been placed successfully!",
        text: `Your Order_id is ${response.razorpay_payment_id}`,
        icon: "success",
      });
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
    },
    "prefill": {
        "name": userName,
        "email": userEmail,
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  async function  paymenthandler(e){
    props.loaderhandler(true)
    const backendhit = await displayRazorpay(TotalPrice,genReceipt)
    props.loaderhandler(false)
    setorderId(backendhit)
    rzp1.open();
    e.preventDefault();
  }

  return (
    <>
    <Helmet>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </Helmet>
    {/* { Loader &&  <InitialLoader/>} */}
    <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
      <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
        <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

        <div className="flex-w flex-t bor12 p-b-13">
          <div className="size-208">
            <span className="stext-110 cl2">Subtotal:</span>
          </div>

          <div className="size-209">
            <span className="mtext-110 cl2">₹{cartTotalPrice}</span>
          </div>
        </div>

        <div className="flex-w flex-t bor12 p-t-15 p-b-30">
          <div className="size-208 w-full-ssm">
            <span className="stext-110 cl2">Shipping:</span>
          </div>

          <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
            <p className="stext-111 cl6 p-t-2">
              There are no shipping Charges available. 
            </p>

            {/* <div className="p-t-15">
              <span className="stext-112 cl8">Calculate Shipping</span>

              <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                <select className="js-select2" name="time">
                  <option>Select a country...</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <div className="dropDownSelect2"></div>
              </div>

              <div className="bor8 bg0 m-b-12">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="state"
                  placeholder="State /  country"
                />
              </div>

              <div className="bor8 bg0 m-b-22">
                <input
                  className="stext-111 cl8 plh3 size-111 p-lr-15"
                  type="text"
                  name="postcode"
                  placeholder="Postcode / Zip"
                />
              </div>

              <div className="flex-w">
                <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                  Update Totals
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Pincode/>
        <div className="flex-w flex-t p-t-27 p-b-33">
          <div className="size-208">
            <span className="mtext-101 cl2">Total:</span>
          </div>

          <div className="size-209 p-t-1">
            <span className="mtext-110 cl2">₹{cartTotalPrice}</span>
          </div>
        </div>

        <div onClick={paymenthandler} className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
          Proceed to Checkout
        </div>
      </div>
    </div>
    </>
  );
}
