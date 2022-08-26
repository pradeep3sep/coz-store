import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Article from "./Article";
import FilterHome from "./FilterHome";
import Search from "./Search";
import {GettingAllProducts} from "../RealTimeDatabse/RealTimeDatabase"
// import axios from 'axios';
import { useEffect } from "react";

export default function Product() {
  const [allprodutcs, setallprodutc] = useState([]);
  useEffect(() => {
    GettingAllProducts().then((res)=>  setallprodutc(res))
  }, [])

  let aricelData = [
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Yellow", "Grey"],
      productName: "Esprit Ruffle Shirt",
      price: {
        mrpprice: "410",
        usdprice: "510",
        gbpprice: '610',
        eurprice: '710',
      },
      id: 1,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "White", "Navy"],
      productName: "Herschel supply",
      price: {
        mrpprice: "420",
        usdprice: "250",
        gbpprice: '260',
        eurprice: '720',
      },
      id: 2,
    },
    {
      gender: "men",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "L", "XL"],
      color: ["Red", "Blue", "Black", "Grey"],
      productName: "Only Check Trouser",
      price: {
        mrpprice: "403",
        usdprice: "503",
        gbpprice: '630',
        eurprice: '370',
      },
      id: 3,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "S", "L", "XL", "XXL"],
      color: ["Red", "Green", "White", "Grey"],
      productName: "Classic Trench Coat",
      price: {
        mrpprice: "440",
        usdprice: "450",
        gbpprice: '640',
        eurprice: '704',
      },
      id: 4,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABdJSYZYXUogyKV0--khwRWa/product-05.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "L", "XXL"],
      color: ["Pink", "Blue", "White", "Grey"],
      productName: "Front Pocket Jumper",
      price: {
        mrpprice: "540",
        usdprice: "550",
        gbpprice: '605',
        eurprice: '705',
      },
      id: 5,
    },
    {
      gender: "watches",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADpKDXxnG6rXQGwGu_3fazaa/product-06.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "White", "Navy"],
      productName: "Vintage Inspired Classic",
      price: {
        mrpprice: "640",
        usdprice: "560",
        gbpprice: '606',
        eurprice: '706',
      },
      id: 6,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABfHpmNBUA4UPQicFLJWblGa/product-07.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Red", "Blue", "Yellow", "Grey"],
      productName: "Shirt in Stretch Cotton",
      price: {
        mrpprice: "740",
        usdprice: "570",
        gbpprice: '607',
        eurprice: '707',
      },
      id: 7,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzTOcXBUWuIfWVl656NL0Na/product-08.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Pink", "White", "Grey"],
      productName: "Pieces Metallic Printed",
      price: {
        mrpprice: "407",
        usdprice: "508",
        gbpprice: '608',
        eurprice: '708',
      },
      id: 8,
    },
    {
      gender: "shoes",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADgM9uhcyvTg3h_8fl3a3B6a/product-09.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Black", "Blue", "White", "Grey"],
      productName: "Converse All Star Hi Plimsolls",
      price: {
        mrpprice: "409",
        usdprice: "590",
        gbpprice: '960',
        eurprice: '790',
      },
      id: 9,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAn2TTTx48ZlgHAsITpMlx4a/product-10.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Green", "Grey"],
      productName: "Femme T-Shirt In Stripe",
      price: {
        mrpprice: "400",
        usdprice: "500",
        gbpprice: '600',
        eurprice: '700',
      },
      id: 10,
    },
    {
      gender: "men",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABmsPQBs7GlRki4KEC7zavka/product-11.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "L", "XXL"],
      color: ["Red", "Blue", "Navy", "Grey"],
      productName: "Herschel supply",
      price: {
        mrpprice: "410",
        usdprice: "530",
        gbpprice: '604',
        eurprice: '705',
      },
      id: 11,
    },
    {
      gender: "men",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQGDZrUJ6VTS13ODEHdxSta/product-12.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["Pink", "Blue", "White", "Grey"],
      productName: "Herschel supply",
      price: {
        mrpprice: "406",
        usdprice: "507",
        gbpprice: '608',
        eurprice: '709',
      },
      id: 12,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AADTVls7NTnt7qodi0GDLh31a/product-13.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "L", "XL"],
      color: ["Red", "Blue", "White", "Green"],
      productName: "T-Shirt with Sleeve",
      price: {
        mrpprice: "430",
        usdprice: "520",
        gbpprice: '605',
        eurprice: '706',
      },
      id: 13,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AACzyfZRxlbfLf1un4fJDeeZa/product-14.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["XS", "S", "M", "XL", "XXL"],
      color: ["Green", "Blue", "White", "Grey"],
      productName: "Pretty Little Thing",
      price: {
        mrpprice: "403",
        usdprice: "504",
        gbpprice: '607',
        eurprice: '709',
      },
      id: 14,
    },
    {
      gender: "watches",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AABEPRGY-wyqutowWdZU-TV-a/product-15.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["XS", "S", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Maroon", "Grey"],
      productName: "Mini Silver Mesh Watch",
      price: {
        mrpprice: "410",
        usdprice: "520",
        gbpprice: '605',
        eurprice: '707',
      },
      id: 15,
    },
    {
      gender: "women",
      image: [
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAKRusfn-sPcEN9mropAbIoa/product-16.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAQFNRkWQypKr8ugTSGTCCAa/product-01.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAAdD3PTu62r2SOaEqEUqgoYa/product-02.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAB6T_4R5p6NwIKaEfYQQmQqa/product-03.jpg?raw=1",
        "https://www.dropbox.com/sh/4i6rdj8rtykbk1f/AAA6F38VIMyflpTGizuJjRfva/product-04.jpg?raw=1",
      ],
      size: ["XS", "M", "L", "XL", "XXL"],
      color: ["Red", "Blue", "Green", "Grey"],
      productName: "Square Neck Back",
      price: {
        mrpprice: "402",
        usdprice: "530",
        gbpprice: '670',
        eurprice: '790',
      },
      id: 16,
    },
  ];
  // useEffect(() => {
  //   console.log(process.env.REACT_APP_FIREBASE_BASEURL,"url");
  //   axios
  //   .put(`${process.env.REACT_APP_FIREBASE_BASEURL}productList.json`, {...aricelData})
  //   .then(response => console.log(response,"response"))
  // })
  
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
      <div className="bg0 p-t-117 p-b-140 mobproduct">
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
              {/* <div
                className={`flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter ${
                  shwFlter ? "show-filter" : ""
                }`}
                onClick={showFilter}
              >
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div> */}

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
