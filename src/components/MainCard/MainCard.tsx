import React, { useState, useEffect, useRef } from 'react';
import '../../styles/MainCard.css';

type CarouselItem = {
    img_src: string;
    mainHeading: string;
    subHeading: string;
};

type MainCardProps = {
    carousel_data: CarouselItem[];
};


const MainCard: React.FC<MainCardProps> = ({ carousel_data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const mainImgOverlay = useRef<any>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            mainImgOverlay.current.style.opacity = 1;
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel_data.length);
            }, 400)
        }, 5000);

        return () => clearInterval(intervalId);
    }, [carousel_data.length]);

    useEffect(() => {
        mainImgOverlay.current.style.opacity = 0;
    }, [currentIndex])

    return (
        <div className='mainCard-container'>
            <div className='mainCard-secondaryContainer'>
                <div className="left rounded-20 shadow-white-mid border-white-mid">
                    <div className="overlay" ref={mainImgOverlay} />
                    <img src={carousel_data[currentIndex].img_src} alt="" className='' id="main-img" />
                </div>
                <div className="right">
                    <div className="mainHeading">
                        <h1>{carousel_data[currentIndex].mainHeading}</h1>
                    </div>
                    <div className="subHeading">
                        <p>
                            {carousel_data[currentIndex].subHeading}
                        </p>
                    </div>
                </div>
                <div className="bottom bubble-top-right bubble-top-left ">
                    <div className="mainHeading">
                        <h1>{carousel_data[currentIndex].mainHeading}</h1>
                    </div>
                    <div className="subHeading">
                        <p>
                            {carousel_data[currentIndex].subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCard;
