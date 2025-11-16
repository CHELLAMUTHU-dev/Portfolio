import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaUser } from "react-icons/fa";
import logo from '../../assets/logo.png'
import './index.css'

const Footer = () =>  {
    const {theme} = useContext(ThemeContext);
    const bgColor = theme === "dark" ? "footer-black-bg" : "footer-white-bg";
    return(
        <div className={`footer ${bgColor}`}> 
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo">
                        <img src={logo} alt=""  />
                        <p>CHELLAMUTHUMARI</p>
                    </div>
                    <p>I am a Full Stack Developer(Fresher) with hands-on experience in building web application using the MERN stack</p>
                </div>
                <div className="footer-top-right" >
                    <div className="footer-email-input" style={{backgroundColor: theme === "dark" ? "white" : "#b1aeae5a"}}>
                        <FaUser style={{color:"black"}}/>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Chellamuthumari. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
)}


export default Footer
