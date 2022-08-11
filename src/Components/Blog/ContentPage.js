import React from "react";
import Search from "../Home/Search";
import Archieve from "./Archieve";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import ItemBlog from "./ItemBlog";
import Pagination from "./Pagination";
import Tags from "./Tags";

export default function ContentPage() {
  const blog_list_items = [
    {
      image: require("../../images/blog-04.jpg"),
      date: "22",
      month: "Jan",
      year: "2018",
      title: "8 Inspiring Ways to Wear Dresses in the Winter",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
    },
    {
      image: require("../../images/blog-05.jpg"),
      date: "18",
      month: "Jan",
      year: "2018",
      title: "The Great Big List of Men’s Gifts for the Holidays",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
    },
    {
      image: require("../../images/blog-06.jpg"),
      date: "16",
      month: "Jan",
      year: "2018",
      title: "5 Winter-to-Spring Fashion Trends to Try Now",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius",
    },
  ];
  return (
    <>
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* <!-- item blog --> */}
                {blog_list_items.map((blog_list_item,index) => <ItemBlog passing_value = {blog_list_item} key={`₹${index}_cp`} />)}

                {/* <!-- Pagination --> */}
                <Pagination/>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <Search/>
                <Categories/>
                <FeaturedProducts/>
                <Archieve/>
                <Tags/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
