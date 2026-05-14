import React from "react";
import './education.css';
import school from '../../assets/school.png';
import college from '../../assets/college.png';
import college1 from '../../assets/college1.png';



const Education =()=>{
    return(
        <section id="education">
            <h1 className="eduTitle">Education</h1>
            <p className="eduDesc">My academic journey and educational achievements</p>
            <div className="educationItems">
                <div className="educationItem">
                    <img src= {school} alt="School" className="educationImg" />
                    <h3 className="educationItemTitle">10th Education</h3>
                    <p className="educationItemPara">DOON SR SEC SCHOOL KUNDHANI MUZAFFARPUR</p>
                    <p className="educationItemYear">Year: 2019</p>
                    <p className="educationItemPer">Marks: 66%</p>
                </div>
                 <div className="educationItem">
                    <img src={college} alt="Higher School" className="educationImg" />
                    <h3 className="educationItemTitle">12th Education</h3>
                    <p className="educationItemPara">RCS COLLEGE BEGUSARAI</p>
                    <p className="educationItemYear">Year: 2021</p>
                    <p className="educationItemPer">Marks:74%</p>
                </div>
                <div className="educationItem">
                    <img src={college1} alt="College" className="educationImg" />
                    <h3 className="educationItemTitle">College Education</h3>
                    <p className="educationItemPara">PARUL INSTITUTE OF TECHNOLOGY</p>
                    <p className="degree">Bachelor of Technology (CSE)</p>
                    <p className="educationItemYear">Year: 2027 Expected</p>
                    <p className="educationItemPer">Grade: 7.29 CGPA</p>
                </div>
            </div>
        </section>
    )
}

export default Education