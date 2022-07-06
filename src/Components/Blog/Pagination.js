import React from "react";

export default function Pagination() {
  return (
    <>
      <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
        <a
          href="/"
          className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
        >
          1
        </a>

        <a href="/" className="flex-c-m how-pagination1 trans-04 m-all-7">
          2
        </a>
      </div>
    </>
  );
}
