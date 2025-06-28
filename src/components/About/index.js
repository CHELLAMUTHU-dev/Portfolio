import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg'

import './index.css'



const About = () => (
        <div id='about' className="about">
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
                </div>
            </div>
        </div>
    )
export default About
