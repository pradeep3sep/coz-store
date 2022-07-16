import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function ZoomModal(props) {
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        vertical: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        customPaging: i => (
            <div
              style={{
                minWidth: "60px",
                color: "#ccc",
                fontSize: '12px'
              }}
            >
              {i + 1} of {props.imageArray.length}
            </div>
          )
    };



  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 zoom-modal'>
                <Slider {...settings1}>
                {props.imageArray.map((arr,index)=>{
                        return <div key={`_p${index}`}><img src={arr} alt="" width="412px" style={{margin : "auto"}} /></div>
                    })}
                </Slider>
                <button className="mfp-close" onClick={props.showZoomModal}>X</button>
            </div>
        </div>
    </div>
  )
}
