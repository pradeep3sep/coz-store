import React from "react";

export default function Title() {
  return (
    <div>
      <section
        className="bg-img1 m-t-84 txt-center p-lr-15 p-tb-92"
        style={{
          backgroundImage: `url(${require("../../images/bg-02.jpg")})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">Blog</h2>
      </section>
    </div>
  );
}
