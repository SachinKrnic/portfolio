import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'

const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <p className="navbarText">Portfolio</p>

      <div className="desktopMenu">
        <Link to="intro" smooth={true} duration={500} offset={-100} className="desktopMenuListItem">
          Home
        </Link>

        <Link to="skills" smooth={true} duration={500} offset={-50} className="desktopMenuListItem">
          Project
        </Link>

        <Link to="works" smooth={true} duration={500} offset={-50} className="desktopMenuListItem">
          Certificate
        </Link>

        <Link to="education" smooth={true} duration={500} offset={-50} className="desktopMenuListItem">
          Education
        </Link>

        <Link to="contactPage" smooth={true} duration={500} offset={-80} className="desktopMenuListItem">
          Contact
        </Link>
      </div>

            {/* Mobile view */}


            <img src={menu} alt="menu" className="mobMenu" onClick={() => setshowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem"  onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Project</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Certificate</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Education</Link>
            <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Contact</Link>
            </div>

    </nav>
  );
};

export default Navbar;