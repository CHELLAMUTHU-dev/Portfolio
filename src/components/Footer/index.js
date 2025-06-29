import { FaUser } from "react-icons/fa";
import logo from '../../assets/logo.jpg'
import './index.css'

const Footer = () =>  (
        <div className='footer'> 
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <p>CHELLA</p>
                    </div>
                    <p>I am a Full Stack Developer(Fresher) with hands-on experience in building web application using the MERN stack</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser/>
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
)


export default Footer
