import {useContext} from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'
import {ThemeContext} from '../../context/ThemeContext'
import './index.css'



const About = () => {
    const {theme} = useContext(ThemeContext);
    const bgColor = theme === "dark" ? "black-bg" : "white-bg";
    return(
        <div id='about' className={`about ${bgColor}`}>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt="profile" className='profile'/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a Full Stack Developer (Fresher) with hands-on experience in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I’ve developed personal and academic projects that demonstrate my ability to create dynamic, responsive user interfaces and efficient backend services. I’m passionate about solving real-world problems through technology and looking forward to starting my professional journey in a forward-thinking organization.</p>
                    </div>
                    <div className="about-details">
                        <div className="details">
                            <h1>10+ </h1>
                            <p>Projects Completed</p>
                        </div>
                        <div className="details">
                            <h1>Fresher</h1>
                            <p>Experience</p>
                        </div>
                        <div className="details">
                            <h1>100% </h1>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
