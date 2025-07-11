import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail ,MdLocationPin, } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useState,useContext } from "react";
import {ThemeContext} from '../../context/ThemeContext'
import './index.css'

import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () =>  {
    
    const {theme} = useContext(ThemeContext);
    const bgColor = theme === "dark" ? "contact-black-bg" : "contact-white-bg";
    const [result, setResult] =useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "507f5bdf-b0ef-4f06-a4c5-8fe1cab79fa6");
    
    const object =    Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers:{
            'Content-type': "application/json",
            Accept: 'application/json'
        },
        body: json
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }}
    return(
        <div id='contact' className={`contact ${bgColor}`}>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects or join your company, so feel free to send a message about anything that you want me to work on or hiring on .You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <MdEmail/><p>chellamuthup16072002@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <BiSolidPhoneCall/><p>+91 8870926742</p>
                        </div>
                        <div className="contact-detail">
                                <BsLinkedin/><a href="https://www.linkedin.com/in/chellamuthumarip/" style={{color: theme === "dark" ? "white" : "black"}} target="_blank" rel='noreferrer'>https://www.linkedin.com/in/chellamuthumarip</a>
                        </div>
                        <div className="contact-detail">
                                <FaGithub/><a href="https://github.com/" target="_blank" rel='noreferrer' style={{color: theme === "dark" ? "white" : "black"}}>https://github.com</a>
                        </div>
                        <div className="contact-detail">
                                <MdLocationPin/><p>Tirumangalam , Madurai, TamilNadu </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="" >Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' style={{backgroundColor: theme === "dark" ? "white" : "#b1aeae5a"}} />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email"  placeholder="Enter your email" style={{backgroundColor: theme === "dark" ? "white" : "#b1aeae5a"}} />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder="Enter your message" style={{backgroundColor: theme === "dark" ? "white" : "#b1aeae5a"}}></textarea>
                    <button type='submit' className="contact-submit">
                        Submit now
                    </button>
                    <span>{result}</span>
                </form>
            </div>
        </div>
    )
}


export default Contact
