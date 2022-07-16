import React from "react";

export default function Categories() {
  const categories = [
    "Fashion",
    "Beauty",
    "Street Style",
    "Life Style",
    "DIY & Crafts",
  ];
  return (
    <div className="p-t-55">
      <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

      <ul>
        {categories.map((data) => (
          <li className="bor18" key={data}>
            <a
              href="/"
              className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
            >
              {data}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
