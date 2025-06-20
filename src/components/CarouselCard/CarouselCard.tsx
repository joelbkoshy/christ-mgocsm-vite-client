import React from 'react'
import '../../styles/CarouselCard.css'

type carouselCardData = {
    data: {
        img_src: string,
        dateTime: string,
        mainTitle: string,
        news: string
    }
}



const CarouselCard = ({ data }: carouselCardData) => {
    return (
        <div className='carouselCard-container'>
            <div className="imageContainer">
                <img src={data?.img_src} alt="" />
            </div>
            <div className="contentContainer">
                <h6 className='date-titleContainer'>{data?.dateTime}</h6>
                <h3 className="mainTitle">{data?.mainTitle}</h3>
                <p>{data?.news}</p>
            </div>
            <div className="carouselCardBottom"></div>
        </div>
    )
}

export default CarouselCard