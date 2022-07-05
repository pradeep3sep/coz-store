import React, { useRef } from "react";


export default function Search(props) {
  const inputRef = useRef();
  function handleInput(){
    props.word(inputRef.current.value)
  }
  return (
    <div className={`dis-none panel-search w-full p-t-10 p-b-15 ${props.data ? "show" : ""}`}>
      <div className="bor8 dis-flex p-l-15">
        <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
          <i className="zmdi zmdi-search"></i>
        </button>

        <input
          className="mtext-107 cl2 size-114 plh2 p-r-15"
          type="text"
          name="search-product"
          placeholder="Search"
          ref={inputRef}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
