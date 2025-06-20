import  { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import christMgocsm from '../../assets/logos/1000068258-removebg[1].png'
import menu from '../../assets/menu/menu.png'
import close from '../../assets/menu/close.png'
import '../../styles/Navbar.css'

const Navbar = () => {

    const [menuActive, setMenuActive] = useState<boolean>(false)

    const navigate = useNavigate();
    const location = useLocation();


    const isHomePage = location.pathname === '/'

    const handleNavigation = () => {
        if (isHomePage) {
            scrollTop();
        }
        else {
            navigate('/')
        }
    }


    //Scroll to top
    function scrollTop() {
        window.scrollTo(0, 0);
    }


    //Refs
    const nav = useRef(null);

    //Hide Nav on Scroll
    let scrollY = window.scrollY;
    useEffect(() => {
        const hideNav = () => {
            if (window.scrollY > scrollY) {
                (nav.current as unknown as HTMLElement)?.classList.add("hide");
            } else {
                (nav.current as unknown as HTMLElement)?.classList.remove("hide");
            }
            scrollY = window.scrollY;
        }

        window.addEventListener("scroll", hideNav);

        return () => window.removeEventListener("scroll", hideNav);
    }, [])



    return (
        <div className='nav-container'
            ref={nav}>
            <div className="left">
                <Link to={"/"}>
                    <img className='christ-logo' src={christMgocsm} onClick={handleNavigation} alt="" />
                </Link>
            </div>
            <div className="middle">
                <ul>
                    <li onClick={scrollTop}><Link className='mid-text-font fw-bold' to={"/"}>Home</Link></li>
                    <li onClick={scrollTop}><Link className='mid-text-font fw-bold' to={"/enchristo"}>Enchristo'24</Link></li>
                    <li onClick={scrollTop}><Link className='mid-text-font fw-bold' to={"/about-us"}>About Us</Link></li>
                    {/* <li onClick={scrollTop}><Link className='mid-text-font fw-bold' to={"/gallery"}>Gallery</Link></li> */}
                    <li onClick={scrollTop}><Link className='mid-text-font fw-bold' to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <div className="right">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScB53c0ROuqAI0WJ_44dXkzJkce-XsSdxJv7MMwi0vGNfGumQ/viewform"><button className='button-5'>Join Now</button></a>
                {
                    menuActive ?
                        <img src={close} alt="" onClick={() => setMenuActive(false)} />
                        :
                        <img src={menu} alt="" onClick={() => setMenuActive(true)} />
                }
            </div>

            <div className={menuActive ? 'bigMenuActive' : 'bigMenu'}>
                <div className="list " >
                    <a className="bigAnim" href="/" >Home <span /></a>
                    <a className="bigAnim" href="/enchristo" >Enchristo'24 <span /></a>
                    <a className="bigAnim" href="/about-us" >About Us <span /></a>
                    {/* <a className="bigAnim" href="#val" onClick={() => { }}>Gallery <span /></a> */}
                    <a className="bigAnim" href="/contact" >Contact <span /></a>
                    <a className="bigAnim" href="https://docs.google.com/forms/d/e/1FAIpQLScB53c0ROuqAI0WJ_44dXkzJkce-XsSdxJv7MMwi0vGNfGumQ/viewform">Join Now <span /></a>
                </div>
            </div>

        </div>
    )
}

export default Navbar