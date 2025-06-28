import {useContext,useState, useRef} from 'react'
import ThemeContext from '../../context/ThemeContext'
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import './index.css'
import logo from '../../assets/logo.jpg'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    const [menu,setMenu] =useState('home')
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = '0'
    }
    const closeMenu = () => {
        menuRef.current.style.right = '-350px'
    }
    // const backgroundColor = isDarkTheme ? "black-bg": 'white-bg'
    // const textColor = isDarkTheme ? " #f9f9f9" : 'rgb(23, 22, 22)'
    return(
        <div className='navbar'>
            <img src={logo} alt=""className='logo' />
            <RiMenu3Fill onClick={openMenu} className='nav-mob-open'/>
            <ul ref={menuRef}  className={`nav-menu `}>
                <MdOutlineClose className='nav-mob-close' onClick={closeMenu}/>   
                <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={nav_underline} alt=''/>: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About</p></AnchorLink>{menu === 'about' ? <img src={nav_underline} alt=''/>: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={() => setMenu('skills')}>Skills</p></AnchorLink>{menu === 'skills' ? <img src={nav_underline} alt=''/>: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu('projects')}>Projects</p></AnchorLink>{menu === 'projects' ? <img src={nav_underline} alt=''/>: <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={nav_underline} alt=''/>: <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Header