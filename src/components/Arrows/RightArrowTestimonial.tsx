import React from 'react'
import '../../styles/RightArrowTestimonial.css'

const RightArrowTestimonial = (props: any) => {

    const { onClick, style } = props


    return (
        <div className={`right-arrow-testimonial slick-arrow`} onClick={onClick} style={{ ...style }}>
        </div>
    )
}

export default RightArrowTestimonial