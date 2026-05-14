import React from "react";
import './skills.css';
import Portfolio from '../../assets/portfolio.png'
import Skillswap from '../../assets/skillswap.png'
import EV from '../../assets/evWebsite.png'
import StudySync from '../../assets/StudySync.png'


const Skills = ()=>{
    return(
     <section id="skills">
       <span className="project">Project</span>
        <div className="projectsbox">

               <div className="projectDetails">
                     <img src={Portfolio} alt="Portfolio" className="projectImg" />

               <div className="ProjectText">
                       <h2 className="projectHead">Portfolio</h2>
                         <p className="projectDesc">
                         A portfolio is a personal website or collection that shows your skills, projects, education, and achievements. It helps people understand your work and experience professionally.
                        </p>
              </div>

              <div className="tag-container">
                    <div className="tag">React</div>
                    <div className="tag">HTML</div>
                    <div className="tag">CSS</div>
                    <div className="tag">JavaScript</div>
             </div>

                        <div className="button-group">
                           <a href="https://github.com/SachinKrnic/portfolio" target="_blank" rel="noreferrer" className="btn-dark">GitHub</a>
                           <a href="https://portfolio-one-jet-66.vercel.app/" target="_blank" rel="noreferrer" className="btn-blue"> Demo</a>
                        </div>
   </div>

            <div className="projectDetails">
                      <img src={Skillswap} alt="Portfolio" className="projectImg" />
                      <div className="ProjectText">
                        <h2 className="projectHead">SkillSwap</h2>
                        <p className="projectDesc">
                          SkillSwap is a React-based platform for exchanging skills without money.
                        It helps users connect, learn, and share skills through a simple interface.
                        </p>
                      </div>

                          <div className="tag-container">
                            <div className="tag">React</div>
                            <div className="tag">Express.js</div>
                            <div className="tag">Node.js</div>
                            <div className="tag">JavaScript</div>
                           </div>

                          <div className="button-group">
                            <a href="https://skillswap.living/" target="_blank" rel="noreferrer" className="btn-dark">
                          GitHub
                        </a>
                          <a href="https://skillswap.living/" target="_blank" rel="noreferrer" className="btn-blue">
                          Demo
                        </a>
                          </div>
                        </div>
             <div className="projectDetails">
                        <img src={EV} alt="Portfolio" className="projectImg" />

                        <div className="ProjectText">
                          <h2 className="projectHead">EV-Website</h2>
                          <p className="projectDesc">An EV website is a simple mini project that displays electric vehicle information, features, and designs using web technologies.
                          </p>
                        </div>

                        <div className="tag-container">
                          <div className="tag">React</div>
                          <div className="tag">HTML</div>
                          <div className="tag">CSS</div>
                        </div>

                        <div className="button-group">
                          <a href="https://skillswap.living/" target="_blank" rel="noreferrer" className="btn-dark">
                        GitHub
                      </a>
                        <a href="https://skillswap.living/" target="_blank" rel="noreferrer" className="btn-blue">
                        Demo
                      </a>
                        </div>
                      </div>

             <div className="projectDetails">
                          <img src={StudySync} alt="Portfolio" className="projectImg" />

                          <div className="ProjectText">
                            <h2 className="projectHead">StudySync</h2>
                            <p className="projectDesc">
                             StudySync is a simple mini project website designed using HTML an CSS, that helps students manage and explore study materials, notes.
                            </p>
                          </div>

                          <div className="tag-container">
                            <div className="tag">HTML</div>
                            <div className="tag">CSS</div>
                            <div className="tag">JavaScript</div>
                          </div>

                          <div className="button-group">
                            <a href="" target="_blank" rel="noreferrer" className="btn-dark">
                          GitHub
                        </a>
                          <a href="" target="_blank" rel="noreferrer" className="btn-blue">
                          Demo
                        </a>
                          </div>
                        </div>

             
             
        </div>
     </section>
    )
}

export default Skills;