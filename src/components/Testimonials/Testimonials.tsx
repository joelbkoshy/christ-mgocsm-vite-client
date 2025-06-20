
import React from 'react'
import '../../styles/Testimonials.css'
import Slider from 'react-slick'
import LeftArrowTestimonial from '../Arrows/LeftArrowTestimonial';
import RightArrowTestimonial from '../Arrows/RightArrowTestimonial';


const Testimonials = ({ data }: any) => {

  const settings: any = {
    fade: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 2,
    // waitForAnimate: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: <LeftArrowTestimonial />,
    nextArrow: <RightArrowTestimonial />
  };


  return (
    <div className='testimonialsContainer'>
      <div className="testimonialContentContainer">
        <Slider {...settings}>
          {
            data?.map((testimony: any) => {
              return (
                <div className="testimonyMapContainer" style={{ display: 'flex' }}>
                  <div className="aluminiContainer">
                    <div className="imgContainer">
                      <img src={testimony?.img_src} alt="" />
                    </div>
                    <div className="nameContainer">
                      <span className='nameText'>
                        <div className="firstLine">
                          -&nbsp;<p>{testimony?.name},
                            <br />
                            {testimony?.position}
                          </p>
                        </div>
                        <p></p>
                      </span>
                    </div>
                  </div>
                  <div className="aluminiWordsContainer">
                    <span>
                      "{testimony?.testimony}"
                    </span>
                  </div>
                </div>

              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials