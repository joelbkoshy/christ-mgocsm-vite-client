import React from 'react'
import '../../styles/RightArrow.css'

const RightArrow = (props:any) => {

    const{style,onClick} = props

  return (
    <div className='right-arrow slick-arrow' onClick={onClick} style={{...style}}>

    </div>
  )
}

export default RightArrow