import React from "react";
import displayRazorpay from "./utils/PaymentGateway";

function CourseCard() {
  return (
    <div>
      <br></br>
      <h1 style={{ textAlign: "center" }}>
        RazorPay Payment Gateway Integration in React
      </h1>
      <br></br>
      <button
        type="button"
        onClick={displayRazorpay}
        className="course-payment-button"
      >
        Buy Course
      </button>
    </div>
  );
}

export default CourseCard;