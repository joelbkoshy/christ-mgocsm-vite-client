import React from 'react'
import '../../styles/Footer.css'
import Logo from '../../assets/logos/christMgocsm-trans.png'
import Insta from '../../assets/logos/instagram.png'
import FB from '../../assets/logos/facebook.png'
import YT from '../../assets/logos/youtube.png'
import { useNavigate } from 'react-router-dom'


const Footer = () => {


  function scrollTop() {
    window.scrollTo(0, 0);
  }
  const navigate = useNavigate()

  return (
    <div className='footer-mainContainer'>
      <div className="christMgocsmLogoContainer">
        <img src={Logo} alt="" />
      </div>
      <div className="footerHeadingContainer">
        Let's Grow Together
      </div>
      <span>Make a difference today: Join us for a spiritual journey of compassion and worship.</span>
      <div className="JoinNowButtonContainer">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScB53c0ROuqAI0WJ_44dXkzJkce-XsSdxJv7MMwi0vGNfGumQ/viewform"><button className='button-5'>Join Now</button></a>
      </div>
      <div className="footerFinalBorderContainer">
        <div className="footerWrapper">
          <div className="NavItems">
            <a onClick={() => {
              scrollTop()
              navigate("/")
            }}><span>Home</span></a>
            <a onClick={() => {
              scrollTop()
              navigate("/enchristo")
            }}><span>Enchristo'24</span></a>
            <a onClick={() => {
              scrollTop()
              navigate("/about-us")
            }}><span>About Us</span></a>
            {/* <a onClick={() => {
              scrollTop()
              navigate("/gallery")
            }}><span>Gallery</span></a> */}
            <a onClick={() => {
              scrollTop()
              navigate("/contact")
            }}><span>Contact</span></a>
          </div>
          <div className='socialMediaHandles'>
            <a href="https://www.instagram.com/christmgocsm"><img src={Insta} alt="" className='InstaLogo' /></a>
            <a href="https://www.facebook.com/christmgocsm"><img src={FB} alt="" /></a>
            <a href="https://www.youtube.com/@CHRISTMGOCSM"><img src={YT} alt="" /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer