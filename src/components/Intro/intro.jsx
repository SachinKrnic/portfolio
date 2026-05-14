import React from "react";
import './intro.css';
import bg from '../../assets/Sachin.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span> 
                <span className="introText">
                    I'm <span className="introName">Sachin</span> <br />WEB Developer
                </span>
                <p className="introPara">
                    I am a skilled and passionate web developer with experience in creating 
                    visually appealing and user-friendly websites.
                </p>
                
              <div className="cv">
                  <a href="https://drive.google.com/file/d/1M_mJoJlOjB0UrxXnRgCPLiW_rbA8fTAc/view?usp=sharing" id="cdtext">Download CV</a>
               
              </div>
                
            </div>

            <div className="imageContainer">
                <img src={bg} alt="profile" className="bg" />
            </div>
        </section>
    );
};

export default Intro;