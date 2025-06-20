import React from 'react'
import '../../styles/LeftArrowTestimonial.css'

const LeftArrowTestimonial = (props: any) => {

    const { onClick, style } = props


    return (
        <div className={`left-arrow-testimonial slick-arrow`} onClick={onClick} style={{ ...style }}>
        </div>
    )
}

export default LeftArrowTestimonial