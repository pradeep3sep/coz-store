import React from "react";

export default function ContactTitle() {
  return (
    <>
      <section
        className="bg-img1 m-t-84 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${require("../../images/bg-01.jpg")})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Contact</h2>
      </section>
    </>
  );
}
