import React from "react";

export default function SearchBox() {
  return (
    <div className="bor17 of-hidden pos-relative">
      <input
        className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
        type="text"
        name="search"
        placeholder="Search"
      />

      <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
        <i className="zmdi zmdi-search"></i>
      </button>
    </div>
  );
}
