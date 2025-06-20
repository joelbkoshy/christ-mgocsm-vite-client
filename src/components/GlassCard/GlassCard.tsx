import '../../styles/GlassCard.css'

type card_data = {
    img_src: string,
    mainHeading: string
}

type GlassCardProps = {
    data: card_data
}

const GlassCard = ({ data }: GlassCardProps) => {
    return (
        <div className="container1">
            <div className="wrapper">
                <div className="banner-image">
                    <img src={data?.img_src} alt="" />
                </div>
                <div className="headContainer">
                    <h1>{data?.mainHeading}</h1>
                </div>
            </div>
        </div>

    )
}

export default GlassCard