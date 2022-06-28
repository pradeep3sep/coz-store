import React, { useState } from "react";
import Article from "./Article";
import FilterHome from "./FilterHome";

export default function Product() {
  let aricelData = [
    {
      gender: "women",
      image: require("../../images/product-01.jpg"),
      productName: "Esprit Ruffle Shirt",
      price: "16.64",
    },
    {
      gender: "women",
      image: require("../../images/product-02.jpg"),
      productName: "Herschel supply",
      price: "35.31",
    },
    {
      gender: "men",
      image: require("../../images/product-03.jpg"),
      productName: "Only Check Trouser",
      price: "25.50",
    },
    {
      gender: "women",
      image: require("../../images/product-04.jpg"),
      productName: "Classic Trench Coat",
      price: "75.00",
    },
    {
      gender: "women",
      image: require("../../images/product-05.jpg"),
      productName: "Front Pocket Jumper",
      price: "34.75",
    },
    {
      gender: "watches",
      image: require("../../images/product-06.jpg"),
      productName: "Vintage Inspired Classic",
      price: "93.20",
    },
    {
      gender: "women",
      image: require("../../images/product-07.jpg"),
      productName: "Shirt in Stretch Cotton",
      price: "52.66",
    },
    {
      gender: "women",
      image: require("../../images/product-08.jpg"),
      productName: "Pieces Metallic Printed",
      price: "18.96",
    },
    {
      gender: "shoes",
      image: require("../../images/product-09.jpg"),
      productName: "Converse All Star Hi Plimsolls",
      price: "75.00",
    },
    {
      gender: "women",
      image: require("../../images/product-10.jpg"),
      productName: "Femme T-Shirt In Stripe",
      price: "25.85",
    },
    {
      gender: "men",
      image: require("../../images/product-11.jpg"),
      productName: "Herschel supply",
      price: "63.16",
    },
    {
      gender: "men",
      image: require("../../images/product-12.jpg"),
      productName: "Herschel supply",
      price: "63.15",
    },
    {
      gender: "women",
      image: require("../../images/product-13.jpg"),
      productName: "T-Shirt with Sleeve",
      price: "18.49",
    },
    {
      gender: "women",
      image: require("../../images/product-14.jpg"),
      productName: "Pretty Little Thing",
      price: "54.79",
    },
    {
      gender: "watches",
      image: require("../../images/product-15.jpg"),
      productName: "Mini Silver Mesh Watch",
      price: "86.85",
    },
    {
      gender: "women",
      image: require("../../images/product-16.jpg"),
      productName: "Square Neck Back",
      price: "29.64",
    },
  ];
  const [activeCat, setactiveCat] = useState("All Products");
  const [filterProducts, setfilterProducts] = useState(aricelData);
  const [shwFlter, setshowFilter] = useState(false);

  function showFilter(){
    setshowFilter(!shwFlter);
  }

  function clickCat(event) {
    setactiveCat(event.target.textContent);
    if (event.target.textContent !== "All Products") {
      let newfilter = aricelData.filter((arica) => {
        return arica.gender === event.target.textContent.toLowerCase();
      });
      setfilterProducts(newfilter);
    } else {
      setfilterProducts(aricelData);
    }
  }

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
                    className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                      category === activeCat ? "how-active1" : ""
                    }`}
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
              <div className={`flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter ${shwFlter ? "show-filter" : ""}`} onClick={showFilter}>
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
            <FilterHome data={shwFlter}/>
          </div>

          <div className="row isotope-grid">
            {filterProducts.map((aricelDa) => {
              return <Article aricelDa={aricelDa} />;
            })}
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
