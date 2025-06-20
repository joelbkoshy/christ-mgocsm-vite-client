import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../styles/AboutUs.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutUsContainer">
        <div className="imageContainer left rounded-20 shadow-white-mid border-white-mid">
          <img src="/assets/about-us/bava.jpg" alt="" />
        </div>
        <div className="mgocsmContainer">
          <h3>About MGOCSM</h3>
          <p>
            <span>
              MAR GREGORIOS ORTHODOX CHRISTIAN STUDENT MOVEMENT
              MGOCSM, the 1st Spiritual sapling for students in Asia, is the spiritual organization of the Malankara Orthodox SyrianChurch for its Student Community.

              This spiritual organisation for the students was the laudable initiative of the Senior Leaders and students of our Church, in Madras, in the early part of the 20th century. The organization was founded on the basis of intense yearning for true spiritual progress for the youth along with an ardent spirit of Christian fellowship. The Organization was formed in 1907 as Syrian Student Conference. The first conference of the Movement was held at Madras on the 1st of January 1908.
            </span>
          </p>
        </div>
        <div className="aboutChristMgocsmContainer">
          <h3>About CHRIST MGOCSM</h3>
          <p>
            <span>
              The Mar Gregorios Orthodox Christian Student Movement (MGOCSM) in CHRIST University was founded in 2014 to support Orthodox Christian students in their spiritual and personal growth. The movement’s mission is to foster a vibrant Christian community through prayer, Bible study, and service, while its vision is to create an environment where students can deepen their faith and contribute positively to society.
              The Bangalore Diocese has been instrumental in the movement’s establishment and growth. Under the leadership of H.G. Abraham Mar Seraphim Metropolitan, MGOCSM was launched with a focus on nurturing Orthodox Christian values among students. The guidance and support of the priests from the Bangalore Diocese have been crucial in shaping the movement’s activities and ensuring its alignment with Orthodox teachings.
              Significant support has also come from the Catholic Archbishop Most Rev. Peter Machado; Carmelites of Mary Immaculate (CMI) Fathers, who run the University hosting the movement. The Chancellor, Vice-Chancellor, fathers and other religious nuns, in and around Koramangala, SG Palya have provided invaluable encouragement and resources, facilitating the movement’s integration into campus life and helping it thrive. Their commitment to supporting MGOCSM reflects the broader values of the University in fostering spiritual and personal development among its students. Through this collaborative effort, MGOCSM continues to serve as a cornerstone of spiritual engagement and community service for Orthodox Christian students.
            </span>
          </p>
        </div>
        <h6>
        </h6>
      </div>
      <Footer />
    </div>
  )
}

export default About