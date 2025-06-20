import React from 'react'
import Slider from 'react-slick';
import Testimonials from '../Testimonials/Testimonials';
import '../../styles/TestimonialsSlider.css'

const TestimonialsSlider = ({ data }: any) => {


    const settings: any = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (

        <div className='testimonialsSlider-Container'>
            <Slider {...settings}>
                {
                    data?.map((testimony: any) => {
                        return (
                            <Testimonials data={testimony} />
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default TestimonialsSlider