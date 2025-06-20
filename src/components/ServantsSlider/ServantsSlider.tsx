import Slider from 'react-slick'
import ServantsCard from '../ServantsCard/ServantsCard';
import '../../styles/ServantsSlider.css'

const ServantsSlider = ({ data }: any) => {

  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        }
      }, {
        breakpoint: 983,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 754,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2 
        }
      },
      {
        breakpoint: 493,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2 
        }
      }
    ]
  };

  return (
    <div className='servantsSliderContainer'>
      <Slider {...settings}>
        {
          data?.map((servant: any) => {
            return (
              <ServantsCard data={servant} />
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ServantsSlider