import {React,useState} from 'react';
import logo1 from "../../images/product-01.jpg";
import logo2 from "../../images/product-02.jpg";
import logo3 from "../../images/product-03.jpg";
import logo4 from "../../images/product-04.jpg";
import logo5 from "../../images/product-05.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
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
  };
  const settings1 = {
    dots: false,
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
        <div className='col-2'>
            <Slider {...settings} ref={(slider2) => setNav2(slider2)} asNavFor={nav1}>
            <div>
              <img src={logo1} alt="" width="100px" />
            </div>
            <div>
              <img src={logo2} alt="" width="100px" />
            </div>
            <div>
              <img src={logo3} alt="" width="100px" />
            </div>
            <div>
              <img src={logo4} alt="" width="100px" />
            </div>
            <div>
              <img src={logo5} alt="" width="100px" />
            </div>
          </Slider>
        </div>
        <div className='col-10'>
        <Slider {...settings1} ref={(slider1) => setNav1(slider1)} asNavFor={nav2} >
            <div>
              <img src={logo1} alt="" width="551px" />
            </div>
            <div>
              <img src={logo2} alt="" width="551px" />
            </div>
            <div>
              <img src={logo3} alt="" width="551px" />
            </div>
            <div>
              <img src={logo4} alt="" width="551px" />
            </div>
            <div>
              <img src={logo5} alt="" width="551px" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
