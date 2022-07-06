import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

export default function testmodal() {
  return (
    <div>
        <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              navigation
            //   direction="vertical"
              loop={true}
            //   autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            //   }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
      <SwiperSlide><img src={require("./images/blog-01.jpg")} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require("./images/blog-02.jpg")} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require("./images/blog-01.jpg")} alt="" /></SwiperSlide>
      <SwiperSlide><img src={require("./images/blog-02.jpg")} alt="" /></SwiperSlide>
    </Swiper>
    </div>
  )
}
