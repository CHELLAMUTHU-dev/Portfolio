import { useState, useRef, useContext, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import "./index.css";
import nav_underline from "../../assets/nav_underline.svg";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollProgress;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const background = theme === "dark" ? "black-bg" : "white-bg";
  const color = theme === "dark" ? "white-color" : "black-color";


  return (
    <>
      <div className={`navbar ${background}`}>
        <h3 className={`nav-logo `}>CHELLAMUTHUMARI</h3>
        <RiMenu3Fill onClick={openMenu} className="nav-mob-open" style={{ color: theme === "dark" ? "white" : "black" }} />
        <ul ref={menuRef} className={`nav-menu ${background}`}>
          <MdOutlineClose className="nav-mob-close" onClick={closeMenu} style={{ color: theme === "dark" ? "white" : "black" }} />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")} className={` ${color}`}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={nav_underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")} className={`${color}`}>About</p>
            </AnchorLink>
            {menu === "about" ? <img src={nav_underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#skills">
              <p onClick={() => setMenu("skills")} className={`${color}`}>Skills</p>
            </AnchorLink>
            {menu === "skills" ? <img src={nav_underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#projects">
              <p onClick={() => setMenu("projects")} className={`${color}`}>Projects</p>
            </AnchorLink>
            {menu === "projects" ? <img src={nav_underline} alt="" /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")} className={`${color}` }>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}
          </li>
        </ul>
        <button type="button" onClick={changeTheme} className="change-theme">
          {theme === "dark"? <MdOutlineWbSunny style={{color: "white"}}/> : <BsFillMoonStarsFill style={{color: "black"}}/>}
        </button>
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
};

export default Header;
