import {React,useState} from 'react';
import Slider from "react-slick";
import { Image, Shimmer } from 'react-shimmer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide : true,
    focusOnSelect: true,
    arrows: false
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-2 col-l-2 verticalslider'>
            <Slider {...settings} ref={(slider2) => setNav2(slider2)} asNavFor={nav1}>
              {props.imageArray.map((arr,index)=>{
                return <div key={`_p${index}`}>
                          {/* <img src={arr} alt="" width="100px" /> */}
                          <Image
                            src={arr}
                            width="100px"
                            fallback={<Shimmer width={85} height={106} />}
                          />
                        </div>
              })}
          </Slider>
        </div>
        <div className='col-md-10 col-l-10 col-sm-12 horizontal_slider'>
        <Slider {...settings1} ref={(slider1) => setNav1(slider1)} asNavFor={nav2} >
            {props.imageArray.map((arr,index)=>{
                return <div key={`_p${index}`}>
                          {/* <img src={arr} alt="" width="551px" /> */}
                          <Image
                            src={arr}
                            width="100px"
                            fallback={<Shimmer width={523} height={648} />}
                          />
                        </div>
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
