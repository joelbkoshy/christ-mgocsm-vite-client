import Navbar from '../components/Navbar/Navbar'
import MainCard from '../components/MainCard/MainCard'
import '../styles/Home.css'
import GlassCard from '../components/GlassCard/GlassCard'
import SlickSlider from '../components/Slider/SlickSlider'
import PhotoCard from '../components/PhotoCard/PhotoCard'
import ServantsSlider from '../components/ServantsSlider/ServantsSlider'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

const Home = () => {

  type carousel_data = {
    img_src: string,
    mainHeading: string,
    subHeading: string
  }

  const value: carousel_data[] = [

    {
      img_src: "assets/home/test.jpg",
      mainHeading: "CHRIST MGOCSM",
      subHeading: "Establishing an association aimed at enhancing the spiritual growth of CHRIST University students and fostering a stronger sense of camaraderie among them."
    }, {
      img_src: "assets/home/3.jpg",
      mainHeading: "THADAGAM CHARITY TRIP",
      subHeading: "Visited and contributed ₹38000 to paliative care unit at Christa Shishya Ashramam, Thadagam, Coimbatore on 21 January 2024"
    },
    {
      img_src: "assets/home/2.jpg",
      mainHeading: "ORTHODOX THEOLOGY SEMINARY STUDENTS VISIT",
      subHeading: "A group of 27 deacons from Orthodox Theological Seminary ✝ visited and graced CHRIST MGOCSM on 11th January 2024 "
    },
    {
      img_src: "assets/home/4.jpg",
      mainHeading: "WEEKLY EVENING PRAYERS",
      subHeading: "Conducting Saturday Sandhya Namaskaram at St.Thomas Forane Church, followed by meetings."
    },
    {
      img_src:"assets/home/test1.jpg"
      ,mainHeading:"MONTHLY HOLY QURBANA",
      subHeading:"Conducting Monthly Holy Qurbana at St Gaspar Bhavan, Precious Blood Missionaries"
    }
  ]

  const motto_data: any[] = [
    {
      img_src: "assets/motto/worship.png",
      mainHeading: "WORSHIP",
    }, {
      img_src: "assets/motto/study.png",
      mainHeading: "STUDY",
    }, {
      img_src: "assets/motto/service.png",
      mainHeading: "SERVICE",
    }
  ]

  const latestNews: any[] = [
    {
      img_src: "assets/home/vivek.jpg",
      dateTime: "August 4, 2024",
      mainTitle: "Holy Qurbana",
      news: "Holy Qurbana by the presence of H.G. Geevarghese Mar Philoxenos, Asst. Metropolitan of Bangalore Diocese"
    },
    {
      img_src: "assets/home/nombu.jpg",
      dateTime: "March 13, 2024",
      mainTitle: "Holy Lent",
      news: "Conducting evening prayer during lent coordinated by Rev. Fr. Jacob Varghese"
    },
    {
      img_src: "assets/home/test1.jpg",
      dateTime: "February 11, 2024",
      mainTitle: "Holy Qurbana",
      news: "Conducted monthly Holy Qurbana at Precious Blood Chapel"
    },
    {
      img_src: "assets/home/4.jpg",
      dateTime: "February 3,2024",
      mainTitle: "ANNUAL general Body meeting",
      news: "Conducted annual general body meeting at St Thomas Forane Church"
    }, {
      img_src: "assets/home/3.jpg",
      dateTime: "January 22, 2024",
      mainTitle: "THADAKAM CHARITY VISIT",
      news: "Visited  and contributed to Christu Shishya Ashramam at Thadakam, Coimbatore "
    }, {
      img_src: "assets/home/5.jpg",
      dateTime: "January 20, 2024",
      mainTitle: "Jamming Session",
      news: "Organised Jamming Session near Bird's Park "
    }, {
      img_src: "assets/home/2.jpg",
      dateTime: "January 11, 2024",
      mainTitle: "ORTHODOX THEOLOGY SEMINARY STUDENTS VISIT",
      news: "Welcomed 27 Orthodox Theological Seminary deacons at Christ Central Campus "
    }
  ]

  const patronData: any = {
    img_src: "assets/thirumenis/parumala_thirumeni.jpg",
    mainHeading: "Our Patron",
    subHeading: "St. Gregorios of Parumala"
  }

  const bishopsData: any[] = [{
    img_src: "assets/thirumenis/bava.jpg",
    mainHeading: "His Holiness Moran Mar Baselios Marthoma Mathews III ",
    subHeading: "Catholicose of the East and The Malankara Metropolitan",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }, {
    img_src: "assets/thirumenis/seraphim_thirumeni.jpg",
    mainHeading: "His Grace Abraham Mar Seraphim Metropolitan",
    subHeading: "President of MGOCSM",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }, {
    img_src: "assets/thirumenis/philexinos_thirumeni.jpg",
    mainHeading: "His Grace Geevarghese Mar Philoxenos Metropolitan",
    subHeading: "Assistant Metropolitan of Bangalore Diocese",
    h2_fontSize: "18px",
    h5_fontSize: "12px"
  }
  ]

  const achansData: any[] = [
    {
      img_src: "assets/achans/vivek_achan.jpg",
      mainHeading: "Rev. Fr. Dr. Vivek Varghese",
      subHeading: "GENERAL SECRETARY \n GLOBAL MGOCSM",
      h2_fontSize: "15px",
      h5_fontSize: "12px"
    }, {
      img_src: "assets/achans/jikku_achan.jpg",
      mainHeading: "Rev. Fr. Jacob Varghese",
      subHeading: "DIRECTOR & CHAPLAIN OF BANGALORE MGOCSM ",
      h2_fontSize: "15px",
      h5_fontSize: "12px"
    }
  ]

  const servantsData: any[] = [{
    img_src: "assets/servants/jisa-ann.jpg",
    name: "Jisa Ann Thomas",
    position: "Vice President-(Female)",
    class:"PhD Scholar-(History)",
    year:"3rd Year"
  },{
    img_src: "assets/servants/christy.jpg",
    name: "Christy Varghese Jacob",
    position: "Vice President-(Male)",
    class: "M.Sc.Actuarial Science",
    year:"2nd Year"
  },
  {
    img_src: "assets/servants/georgie.jpg",
    name: "George Thomas",
    position: "Secretary-(Male)",
   class: "MA Media & Comm. Studies",
    year:"2nd Year"

  }, {
    img_src: "assets/servants/sharon-susan.jpg",
    name: "Sharon Susan Thomas",
    position: "Secretary-(Female)",
    class: "BCA",
    year:"3rd Year"
  },{
    img_src: "assets/servants/benita-susan.jpg",
    name: "Benita Susan Jose",
      position: "Treasurer-(Female)",
   class: "B.Com IAF",
    year:"3rd Year"

  }, {
    img_src: "assets/servants/allen-shiji.jpg",
    name: "Allen Shiji",
      position: "Treasurer-(Male)",
    class: "BCom F&A",
    year:"2nd Year"

  },{
    img_src: "assets/servants/johan-jacob.jpg",
    name: "Johan V Jacob",
    position: "Magazine Head",
    class:"BCom Professional",
    year:"3rd Year"
  },{
    img_src: "assets/servants/rimon-simon.jpg",
    name: "Rimon Simon",
    position: "Media Head",
    class: "BCom IAF",
    year:"2nd Year"
  },
  {
    img_src: "assets/servants/sarah.jpg",
    name: "Sarah Iype",
    position: "Theshmeshto Head-(Female)",
   class: "MCom",
    year:"2nd Year"

  }, {
    img_src: "assets/servants/jerin.jpg",
    name: "Jerin M George",
    position: "Theshmeshto Head-(Male) & LOGOS  Head",
    class: "BSc Physics & Mathematics",
    year:"3rd Year"
  }, {
    img_src: "assets/servants/nevin.jpg",
    name: "Nevin Mathew",
      position: "UG Representative",
    class: "BCom IAF",
    year:"2nd Year"

  },{
    img_src: "assets/servants/jithu.jpg",
    name: "Jithu Varghese",
      position: "PG Representative",
   class: "MCA",
    year:"2nd Year"

  },{
    img_src: "assets/servants/joel.jpg",
    name: "Joel B Koshy",
      position: "PhD Representative",
   class: "PhD Scholar-(Computer Science)",
    year:"2nd Year"

  },{
    img_src: "assets/servants/elwin-mathew.jpg",
    name: "Elwin Mathew Cherian",
      position: "AMOSS Head",
   class: "BSc. Computer Science & Statistics",
    year:"3rd Year"

  },{
    img_src: "assets/servants/jewel-thomas.jpg",
    name: "Jewel Thomas",
      position: "Legal Forum Head",
   class: "BA LLB",
    year:"2nd Year"

  },{
    img_src: "assets/servants/albin.jpg",
    name: "Albin Jacob Sunil",
      position: "Sports Coordinator",
   class: "BCom Accounting & Taxation",
    year:"2nd Year"

  },,{
    img_src: "assets/servants/ashwika.jpg",
    name: "Ashwika B Alex",
      position: "Enchristo Coordinator (Female)",
   class: "BCom Professional",
    year:"3rd Year"

  },{
    img_src: "assets/servants/rincy.jpg",
    name: "Rincy Aniyan",
      position: "Ex-Official",
   class: "BCom Accounting & Taxation",
    year:"3rd Year"

  }
  ]


  const testimonialsData: any[] = [
    {
      img_src: "assets/servants/abin.jpg",
      name: "Abin Joshua Binu",
      position: "FORMER Secretary (Male)",
      testimony: "Within Christ Mgocsm, I found not just companionship, but a sacred bond of unity and understanding, illuminating our spiritual journey with the radiant light of enduring friendship."
    }, {
      img_src: "assets/servants/joel.jpg",
      name: "Joel B Koshy",
      position: "FORMER Vice President (Male)",
      testimony: "In Christ Mgocsm, I discovered more than a spiritual community, it became my sanctuary, my home away from home, where bonds of friendship flourish and souls find solace together."
    },
    {
      img_src: "assets/servants/ninon.jpg",
      name: "Ninon Thomas Chittadathu",
      position: "FORMER Treasurer",
      testimony: "Being a part of Christ MGOCSM has been a journey of growth and self-discovery, where I learned the true essence of service and fellowship, shaping me into a better person."
    },
    {
      img_src: "assets/servants/sandra.jpg",
      name: "Sandra Sara Luke",
      position: "FORMER Media Head",
      testimony: "Christ MGOCSM has been a beacon of hope and a pillar of strength for me, offering a space to grow spiritually and personally, surrounded by a supportive and loving community."
    },
    {
      img_src: "assets/servants/saniya.jpg",
      name: "Saniya Sunil Jacob",
      position: "FORMER Theshmeshtho Head",
      testimony: "In the nurturing environment of Christ MGOCSM, I found not only lifelong friends but also mentors who guided me, helping me to navigate the complexities of life with faith and courage."
    },
    {
      img_src: "assets/servants/lisa.jpg",
      name: "Lisa Shibu George",
      position: "FORMER Vice President (Female)",
      testimony: "Joining Christ MGOCSM was a turning point in my life, providing me with invaluable experiences and lessons in leadership, empathy, and spirituality."
    },
    {
      img_src: "assets/servants/chris.jpg",
      name: "Cris Mariam Saj",
      position: "FORMER Interpersonal Head",
      testimony: "Christ MGOCSM has been a cornerstone in my life, a place where I found not just spiritual guidance but also a sense of belonging and a community that feels like family."
    },
    {
      img_src: "assets/servants/alivi .jpg",
      name: "Alivi Susan Kurian",
      position: "FORMER Secretary (Female)",
      testimony: "Being part of Christ MGOCSM has been an enriching experience that deepened my faith and allowed me to connect with like-minded individuals, fostering a sense of unity and purpose."
    }
  ]

  return (
    <div >
      <Navbar />
      <div className="home-container">
        <MainCard carousel_data={value} />
        <div className="motto-container">
          <h3 className='tex fw-bold img-shadow-light'>OUR MOTTO</h3>
          <div className="motto-cards">
            {
              motto_data?.map((motto) => {
                return (
                  <>
                    <GlassCard data={motto} />
                  </>
                )
              })
            }
          </div>
        </div>
        <div className="latestEvents-container">
          <div className="textContainer">
            <h1>LATEST NEWS</h1>
            <span><p>Whether it's a thought-provoking seminar, an engaging workshop, a vibrant cultural event, or any other inspiring gathering, our passionate team at Christ MGOCSM is committed to crafting memorable experiences and fostering meaningful connections.</p></span>
          </div>
          <div className="carouselContainer">
            <SlickSlider data={latestNews} />
          </div>
        </div>
        <div className="thirumenis-Container">
          <div className='main-thirumenisContainer'>
            <div className="patronContainer ">
              <div className='shadow-contrast-mid border-contrast-mid '>
                <PhotoCard data={patronData} style={{ backgroundColor: '#5b3116' }} />
              </div>
            </div>
            <div className="bishopsContainer">
              {
                bishopsData?.map((bishop: any) => {
                  return (
                    <div className='shadow-contrast-mid border-contrast-mid '>
                      <PhotoCard data={bishop} style={{ backgroundColor: '#5b3116', width: '20rem', height: '25rem', fontSize: '10px' }} />
                    </div>

                  )
                })
              }
            </div>
            <div className="achansContainer">
              {
                achansData?.map((achan: any) => {
                  return (
                    <div className='shadow-contrast-mid border-contrast-mid '>
                      <PhotoCard data={achan} style={{ backgroundColor: '#5b3116', width: '15rem', height: '18.75rem', fontSize: '10px' }} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="servants-Container">
          <div className="headingsContainer">
            <h3>MEET OUR OFFICIALS</h3>
          </div>
          <div className="servantsCarouselContainer">
            <ServantsSlider data={servantsData} />
          </div>
        </div>
        <div className="testimonialsHomeContainer">
          {/* <TestimonialsSlider data={testimonialsData} /> */}
          <Testimonials data={testimonialsData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home