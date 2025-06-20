import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../styles/Enchristo.css'
import enchristo from '../assets/enchristo/enchristo.jpg'
import qurbana from '../assets/enchristo/qurbana.jpg'
import choir from '../assets/enchristo/choir.png'
import Footer from '../components/Footer/Footer'
import '../styles/Home.css'
import achensImg from '../assets/enchristo/sajiachenPreach.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'



const Enchristo = () => {

    //Refs
    const imgAnim = useRef(null);

    //Register Scroll Trigger
    gsap.registerPlugin(ScrollTrigger);

    //Intro GSAP Animation
    useEffect(() => {
        gsap.to("#anim-bar", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
            }
        })
    }, [])

    //Hero Images Animation
    useEffect(() => {
        gsap.to("#ii1", {
            transform: "translateY(-20%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })

        gsap.to("#ii2", {
            transform: "translateY(-30%)",
            scrollTrigger: {
                scrub: 0.3,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })

        gsap.to("#ii3", {
            transform: "translateY(40%)",
            scrollTrigger: {
                scrub: 0.4,
                trigger: "#hero",
                start: "top",
                end: "bottom",
            }
        })
    }, [])

    //Text Line Animation
    useEffect(() => {
        gsap.to("#tl1", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+200",
            }
        })
        gsap.to("#tl2", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+300",
            }
        })
        gsap.to("#tl3", {
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                scrub: 0.2,
                trigger: ".intro",
                start: "+400",
            }
        })
    }, [])

    //Image Parallax Animation
    useEffect(() => {
        document.querySelectorAll(".imgAnim").forEach(item => {
            gsap.to(item, {
                transform: "translateY(-20%)",
                scrollTrigger: {
                    trigger: item,
                    scrub: 0.2
                }
            })
        })
    }, [])

    //Smooth Scroll
    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time:any) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // }, [])


    return (
        <div>
            <Navbar />
            <div className="mainRelativeEnchristoContainer">
                <div className="mainEnchristoContainer">
                    <div className="imgPlusTitleContainer">
                        <div className="enchristoTitleContainer">
                            <div className="mainHeadingContainer">
                                <h1>Enchristo'24 : Faith and Friendship</h1>
                            </div>
                            <div className="subHeadingContainer">
                                <h6 className='dateText'>March 17,2024</h6>
                                <h6 className='venueText'>St Gaspar Bhavan, Precious Blood Missionaries</h6>
                            </div>
                        </div>
                        <div className="enchristoImgContainer ">
                            <img src={enchristo} className='rounded-20 shadow-white-mid border-white-mid' alt="" />
                        </div>
                    </div>
                </div>
                <div className="enchristoMainImageContainer">
                    <div className="enchristoImgContainer1">
                        <img src={achensImg} className='rounded-20  border-white-mid' alt="" />
                    </div>
                    <div className="mainImageTextContainer ">
                        <h1>NURTURING MIND,BODY,AND SOUL</h1>
                        <p>Enchristo'24 - CHRIST MGOCSM conducted the biggest event in its past 9 years of existence through the one day conference which took place on the 17th of March, 2024. MGOCSM Global Top position holders, Rev. Fr. Dr. Vivek Varghese, MGOCSM General Secretary, Rev Fr. Saji Mekkattu, Administrator IAS HUB Trivandrum, Mrs. Anie George, MGOCSM Vice President, graced the event. His Grace Abraham Mar Seraphim Metropolitan, President of MGOCSM and His grace Geevarghese Mar Philexenos  Assistant Metropolitan of Bangalore Diocese supported the cause through a tailored Video for CHRIST MGOCSM. The event was a huge success and was featured in newspapers and media such as Pathanamthitta news and Malayala Manorama among many Others.</p>
                    </div>
                </div>
                <div className="eventsContainer">
                    <section className="events" id="events">
                        <div className="events-container container">
                            <h1>CAPTURED MOMENTS</h1>
                            <div className="fm-grid img-grid">
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src={qurbana} alt="Flash Mob" loading="lazy" />
                                        <span className="cap cali">Holy Qurbana: Chief Celebrant - Rev.Fr.Dr.Vivek Varghese </span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src={choir} alt="Flash Mob" loading="lazy" />
                                        <span className="cap cali">spontaneous grace...</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/people.png" alt="Flash Mob" loading="lazy" />
                                        <span className="cap cali">and synchronized brilliance...</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/oath.png" alt="Flash Mob" loading="lazy" />
                                        <span className="cap cali">that left us in awe...</span>
                                    </div>
                                </div>
                                {/* <div className="img-flex">
                                <div className="img-item">
                                    <img className="imgAnim" src="/assets/fm_4.JPG" alt="Flash Mob" loading="lazy"/>
                                    <span className="cap cali">Thank you for the dazzling performance!</span>
                                </div>
                            </div> */}
                            </div>
                            <div className="ing-main" id="ing">
                                <div className="main-entry">
                                    <div className="left">
                                        <img src="/assets/enchristo/inag.png" alt="Inauguration" />
                                        <img src="/assets/enchristo/jikkuachen.png" alt="Inauguration" />
                                    </div>
                                    <div className="right">
                                        <div className="head">
                                            <span>Inaguration</span>
                                        </div>
                                        <div className="date">
                                            <span>17th March 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ing-grid img-grid">
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/prayersong.png" alt="Inauguration" loading="lazy" />
                                        <span className="cap cali">Grand Inaguration: A Tapestry of Prestige</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/anchor.png" alt="Inauguration" loading="lazy" />
                                        <span className="cap cali">Prestigious Kickoff: Elegance Captured</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/vivekachenclass.png" alt="Inauguration" loading="lazy" />
                                        <span className="cap cali">A Grand Prelude</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/victorachen.png" alt="Inauguration" loading="lazy" />
                                        <span className="cap cali">Embarking in Style: Grandeur Unveiled</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/sajiachen.png" alt="Inauguration" loading="lazy" />
                                        <span className="cap cali">A Prestigious Commencement!</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/sajiachenfun.png" alt="Events" loading="lazy" />
                                        <span className="cap cali">Laughter in Every Frame</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/game.png" alt="Events" loading="lazy" />
                                        <span className="cap cali">Capturing Moments of Pure Joy and Fun</span>
                                    </div>
                                </div>

                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/jikkuachencloseup.png" alt="Events" loading="lazy" />
                                        <span className="cap cali">Vibrant Event Vibes</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/preethi.png" alt="Events" loading="lazy" />
                                        <span className="cap cali">A Tapestry of Smiles</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/elsabeth.png" alt="Events" loading="lazy" />
                                        <span className="cap cali">Where Fun Takes Center Stage</span>
                                    </div>
                                </div>
                            </div>

                            <div className="val-grid img-grid">
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/irene.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Triumphant End: Hard Work Rewarded</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/abin.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Success in Every Smile</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/doxa.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Cheers to Achievement</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/joel.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Hard Work, Happy Hearts</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/bgr.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Culmination of Success</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/jerin&lisa.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Smiles of Triumph</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/blessymam.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Well-Earned Applause</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/rincy.png" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Every Effort Counts</span>
                                    </div>
                                </div>
                                <div className="img-flex">
                                    <div className="img-item">
                                        <img className="imgAnim" src="/assets/enchristo/SMILES.jpg" alt="Valedictory" loading="lazy" />
                                        <span className="cap cali">Smiles All Around</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Enchristo