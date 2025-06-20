import React from 'react'
import '../../styles/LeftArrow.css'

const LeftArrow = (props: any) => {


    const { onClick,style } = props

    return (
            <div className={`left-arrow`} onClick={onClick} style={{ ...style}}>
            </div>
    )
}

export default LeftArrow