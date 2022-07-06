import React from "react";

function ItemBlog(props) {
    let date = props.passing_value.date,
    month = props.passing_value.month,
    year = props.passing_value.year,
    image = props.passing_value.image,
    title = props.passing_value.title,
    description = props.passing_value.description;
  return (
    <>
      <div className="p-b-63">
        <a href="blog-detail.html" className="hov-img0 how-pos5-parent">
          <img src={image} alt="IMG-BLOG" />

          <div className="flex-col-c-m size-123 bg9 how-pos5">
            <span className="ltext-107 cl2 txt-center">{date}</span>

            <span className="stext-109 cl3 txt-center">{month}{year}</span>
          </div>
        </a>

        <div className="p-t-32">
          <h4 className="p-b-15">
            <a href="blog-detail.html" className="ltext-108 cl2 hov-cl1 trans-04">
              {title}
            </a>
          </h4>

          <p className="stext-117 cl6">
            {description}
          </p>

          <div className="flex-w flex-sb-m p-t-18">
            <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
              <span>
                <span className="cl4">By</span> Admin
                <span className="cl12 m-l-4 m-r-6">|</span>
              </span>

              <span>
                StreetStyle, Fashion, Couple
                <span className="cl12 m-l-4 m-r-6">|</span>
              </span>

              <span>8 Comments</span>
            </span>

            <a
              href="blog-detail.html"
              className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
            >
              Continue Reading
              <i className="fa fa-long-arrow-right m-l-9"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemBlog;
