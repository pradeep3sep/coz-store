import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Article from "./Article";
import FilterHome from "./FilterHome";
import Search from "./Search";

export default function Product() {
  let aricelData = [
    {
      gender: "women",
      image: [
        require("../../images/product-01.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Yellow", "Grey"],
      productName: "Esprit Ruffle Shirt",
      price: "16.64",
      id: 1,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-02.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "White", "Navy"],
      productName: "Herschel supply",
      price: "35.31",
      id: 2,
    },
    {
      gender: "men",
      image: [
        require("../../images/product-03.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "S", "M", "L", "XL"],
      color: ["Red", "Blue", "Black", "Grey"],
      productName: "Only Check Trouser",
      price: "25.50",
      id: 3,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-04.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "S", "L", "XL", "XXL"],
      color: ["Red", "Green", "White", "Grey"],
      productName: "Classic Trench Coat",
      price: "75.00",
      id: 4,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-05.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "S", "M", "L", "XXL"],
      color: ["Pink", "Blue", "White", "Grey"],
      productName: "Front Pocket Jumper",
      price: "34.75",
      id: 5,
    },
    {
      gender: "watches",
      image: [
        require("../../images/product-06.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "White", "Navy"],
      productName: "Vintage Inspired Classic",
      price: "93.20",
      id: 6,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-07.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Red", "Blue", "Yellow", "Grey"],
      productName: "Shirt in Stretch Cotton",
      price: "52.66",
      id: 7,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-08.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Pink", "White", "Grey"],
      productName: "Pieces Metallic Printed",
      price: "18.96",
      id: 8,
    },
    {
      gender: "shoes",
      image: [
        require("../../images/product-09.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Black", "Blue", "White", "Grey"],
      productName: "Converse All Star Hi Plimsolls",
      price: "75.00",
      id: 9,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-10.jpg"),
        require("../../images/product-11.jpg"),
        require("../../images/product-12.jpg"),
        require("../../images/product-13.jpg"),
        require("../../images/product-14.jpg"),
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Green", "Grey"],
      productName: "Femme T-Shirt In Stripe",
      price: "25.85",
      id: 10,
    },
    {
      gender: "men",
      image: [
        require("../../images/product-11.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["XS", "S", "M", "L", "XXL"],
      color: ["Red", "Blue", "Navy", "Grey"],
      productName: "Herschel supply",
      price: "63.16",
      id: 11,
    },
    {
      gender: "men",
      image: [
        require("../../images/product-12.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Pink", "Blue", "White", "Grey"],
      productName: "Herschel supply",
      price: "63.15",
      id: 12,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-13.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["XS", "S", "M", "L", "XL"],
      color: ["Red", "Blue", "White", "Green"],
      productName: "T-Shirt with Sleeve",
      price: "18.49",
      id: 13,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-14.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Green", "Blue", "White", "Grey"],
      productName: "Pretty Little Thing",
      price: "54.79",
      id: 14,
    },
    {
      gender: "watches",
      image: [
        require("../../images/product-15.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["XS", "S", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Maroon", "Grey"],
      productName: "Mini Silver Mesh Watch",
      price: "86.85",
      id: 15,
    },
    {
      gender: "women",
      image: [
        require("../../images/product-16.jpg"),
        require("../../images/product-01.jpg"),
        require("../../images/product-02.jpg"),
        require("../../images/product-03.jpg"),
        require("../../images/product-04.jpg"),
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Green", "Grey"],
      productName: "Square Neck Back",
      price: "29.64",
      id: 16,
    },
  ];
  const [activeCat, setactiveCat] = useState("All Products");
  const [filterProducts, setfilterProducts] = useState(aricelData);
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [shwFlter, setshowFilter] = useState(false);
  const [shwSearch, setshwSearch] = useState(false);
  const [modalProduct, setmodalProduct] = useState();

  function showModal() {
    setmodalVisibility(true);
  }
  function closeModal() {
    setmodalVisibility(false);
  }
  function showFilter() {
    setshowFilter(!shwFlter);
  }
  function showSearch() {
    setshwSearch(!shwSearch);
  }

  // this is the clicked data
  function clickedProduct(productid) {
    let shareddata = aricelData.filter((clickarticle) => {
      return clickarticle.id === productid;
    });
    setmodalProduct(...shareddata);
  }
  function seachtype(value) {
    const updateVal = aricelData.filter((dumdata) => {
      return dumdata.productName.toLowerCase().includes(value.toLowerCase());
    });
    setfilterProducts(updateVal);
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
      <div className="bg0 p-t-117 p-b-140">
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
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div
                className={`flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter ${
                  shwFlter ? "show-filter" : ""
                }`}
                onClick={showFilter}
              >
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div
                className={`flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search ${
                  shwSearch ? "show-search" : ""
                }`}
                onClick={showSearch}
              >
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            {/* <!-- Search product --> */}
            <Search data={shwSearch} word={seachtype} />

            {/* <!-- Filter --> */}
            <FilterHome data={shwFlter} />
          </div>

          <div className="row isotope-grid">
            {filterProducts.map((aricelDa, index) => {
              return (
                <Article
                  aricelDa={aricelDa}
                  key={`p1_${index}`}
                  showModal={showModal}
                  clickedProduct={clickedProduct}
                />
              );
            })}
          </div>

          {/* <!-- Load more --> */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="/"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
          {modalVisibility && (
            <Modal closeModal={closeModal} modalProduct={modalProduct} />
          )}
        </div>
      </div>
    </>
  );
}
