import '../../styles/ServantsCard.css'

const ServantsCard = (props: any) => {

    const { data } = props
    return (
        <div className='servantsCard-Container'>
            <img src={data?.img_src} alt="Servant" />
            <div className="textContainer">
                <div className='hero-marquee-item__name'>{data?.name}</div>
                <div className='hero-marquee-item__name'>{data?.position}</div>
                <div className='hero-marquee-item__name'>{data?.class}</div>
                <div className='hero-marquee-item__name'>{data?.year}</div>
            </div>
        </div>
    )
}

export default ServantsCard