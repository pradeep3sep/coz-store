import React, { useState } from "react";
import Article from "./Article";

export default function Product() {
  const [activeCat, setactiveCat] = useState("All Products");
  let aricelData = [
    {
      gender: "male",
      image: "../../images/product-01.jpg",
      productName: "test",
      price: "777",
    },
    {
      gender: "women",
      image: "../../images/product-01.jpg",
      productName: "Esprit Ruffle Shirt",
      price: "16.64",
    },
    {
      gender: "women",
      image: "../../images/product-02.jpg",
      productName: "Herschel supply",
      price: "35.31",
    },
    {
      gender: "men",
      image: "../../images/product-03.jpg",
      productName: "Only Check Trouser",
      price: "25.50",
    },
    {
      gender: "women",
      image: "../../images/product-04.jpg",
      productName: "Classic Trench Coat",
      price: "75.00",
    },
    {
      gender: "women",
      image: "../../images/product-05.jpg",
      productName: "Front Pocket Jumper",
      price: "34.75",
    },
    {
      gender: "watches",
      image: "../../images/product-06.jpg",
      productName: "Vintage Inspired Classic",
      price: "93.20",
    },
    {
      gender: "women",
      image: "../../images/product-07.jpg",
      productName: "Shirt in Stretch Cotton",
      price: "52.66",
    },
    {
      gender: "women",
      image: "../../images/product-08.jpg",
      productName: "Pieces Metallic Printed",
      price: "18.96",
    },
    {
      gender: "shoes",
      image: "../../images/product-09.jpg",
      productName: "Converse All Star Hi Plimsolls",
      price: "75.00",
    },
    {
      gender: "women",
      image: "../../images/product-10.jpg",
      productName: "Femme T-Shirt In Stripe",
      price: "25.85",
    },
    {
      gender: "men",
      image: "../../images/product-11.jpg",
      productName: "Herschel supply",
      price: "63.16",
    },
    {
      gender: "men",
      image: "../../images/product-12.jpg",
      productName: "Herschel supply",
      price: "63.15",
    },
    {
      gender: "women",
      image: "../../images/product-13.jpg",
      productName: "T-Shirt with Sleeve",
      price: "18.49",
    },
    {
      gender: "women",
      image: "../../images/product-14.jpg",
      productName: "Pretty Little Thing",
      price: "54.79",
    },
    {
      gender: "watches",
      image: "../../images/product-15.jpg",
      productName: "Mini Silver Mesh Watch",
      price: "86.85",
    },
    {
      gender: "women",
      image: "../../images/product-16.jpg",
      productName: "Square Neck Back",
      price: "29.64",
    },
  ];
  
  function clickCat(event){
    setactiveCat(event.target.textContent)
  };

  let categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
  return (
    <>
      <div className="bg0 p-t-23 p-b-140">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>

          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              {categories.map((category, index) => {
                return (
                  <button
                    className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${category === activeCat ? "how-active1" : ""}`}
                    onClick={clickCat}
                    key={index + "p"}
                  >
                    {category}
                  </button>
                );
              })}

              {/* below is the same for in html form */}
              {/* <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                            All Products
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                            Women
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                            Men
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                            Bag
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                            Shoes
                        </button>

                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                            Watches
                        </button> */}
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            {/* <!-- Search product --> */}
            <div className="dis-none panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* <!-- Filter --> */}
            <div className="dis-none panel-filter w-full p-t-10">
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Sort By</div>

                  <ul>
                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Default
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Popularity
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Average rating
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Newness
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Price: Low to High
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Price: High to Low
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col2 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Price</div>

                  <ul>
                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        $0.00 - $50.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        $50.00 - $100.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        $100.00 - $150.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        $150.00 - $200.00
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        $200.00+
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col3 p-r-15 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Color</div>

                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#222" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Black
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#4272d7" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04 filter-link-active"
                      >
                        Blue
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#b3b3b3" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Grey
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#00ad5f" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Green
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#fa4251" }}
                      >
                        <i className="zmdi zmdi-circle"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        Red
                      </a>
                    </li>

                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#aaa" }}
                      >
                        <i className="zmdi zmdi-circle-o"></i>
                      </span>

                      <a
                        href="google.com"
                        className="filter-link stext-106 trans-04"
                      >
                        White
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="filter-col4 p-b-27">
                  <div className="mtext-102 cl2 p-b-15">Tags</div>

                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="google.com"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>

                    <a
                      href="google.com"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Lifestyle
                    </a>

                    <a
                      href="google.com"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Denim
                    </a>

                    <a
                      href="google.com"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Streetstyle
                    </a>

                    <a
                      href="google.com"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Crafts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row isotope-grid">
            <Article aricelData={aricelData} />
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-01.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Esprit Ruffle Shirt
                    </a>

                    <span className="stext-105 cl3">$16.64</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-02.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$35.31</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-03.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Only Check Trouser
                    </a>

                    <span className="stext-105 cl3">$25.50</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-04.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Classic Trench Coat
                    </a>

                    <span className="stext-105 cl3">$75.00</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-05.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Front Pocket Jumper
                    </a>

                    <span className="stext-105 cl3">$34.75</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-06.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Vintage Inspired Classic
                    </a>

                    <span className="stext-105 cl3">$93.20</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-07.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Shirt in Stretch Cotton
                    </a>

                    <span className="stext-105 cl3">$52.66</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-08.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Pieces Metallic Printed
                    </a>

                    <span className="stext-105 cl3">$18.96</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-09.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Converse All Star Hi Plimsolls
                    </a>

                    <span className="stext-105 cl3">$75.00</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-10.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Femme T-Shirt In Stripe
                    </a>

                    <span className="stext-105 cl3">$25.85</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-11.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$63.16</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-12.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Herschel supply
                    </a>

                    <span className="stext-105 cl3">$63.15</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-13.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      T-Shirt with Sleeve
                    </a>

                    <span className="stext-105 cl3">$18.49</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-14.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Pretty Little Thing
                    </a>

                    <span className="stext-105 cl3">$54.79</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-15.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Mini Silver Mesh Watch
                    </a>

                    <span className="stext-105 cl3">$86.85</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
              {/* <!-- Block2 --> */}
              <div className="block2">
                <div className="block2-pic hov-img0">
                  <img
                    src={require("../../images/product-16.jpg")}
                    alt="IMG-PRODUCT"
                  />

                  <a
                    href="google.com"
                    className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                  >
                    Quick View
                  </a>
                </div>

                <div className="block2-txt flex-w flex-t p-t-14">
                  <div className="block2-txt-child1 flex-col-l ">
                    <a
                      href="product-detail.html"
                      className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                    >
                      Square Neck Back
                    </a>

                    <span className="stext-105 cl3">$29.64</span>
                  </div>

                  <div className="block2-txt-child2 flex-r p-t-3">
                    <a
                      href="google.com"
                      className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                    >
                      <img
                        className="icon-heart1 dis-block trans-04"
                        src={require("../../images/icons/icon-heart-01.png")}
                        alt="ICON"
                      />
                      <img
                        className="icon-heart2 dis-block trans-04 ab-t-l"
                        src={require("../../images/icons/icon-heart-02.png")}
                        alt="ICON"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Load more --> */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="google.com"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
