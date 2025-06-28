import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/profile.jpg'
import resume from '../../assets/resume.pdf'
import './index.css'


const Hero = () => {



    return(
        <div id='home' className="hero">
                <img src={profile} alt="" className='hero-profile' />
                <h1> <span>I'm Chellamuthumari,</span> Fullstack developer </h1>
                <p>I am a FullStack developer and a fresher candidate</p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                    <a href={resume} target='_blank' rel='noreferrer'   className="hero-resume">My resume</a>
                </div>
        </div>
    )
}
export default Hero
