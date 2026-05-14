import React, { useRef } from "react";
import {Link} from 'react-scroll';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact =()=>{
   const form = useRef();
     const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_mn5vbsi',
    'template_l78vpas',
    form.current,
    { publicKey: 'PS7QHaUu3EX65Wcq7' }
  )
  .then(() => console.log('SUCCESS!'))
  e.target.reset();
  alert('Email Sent !')
  .catch((error) => console.log('FAILED...', error.text));
  alert('Failed to send email')
};
    return(
        <section id="contactPage">
          <div className="aboutAndContact">
            <div id="clients">
                  <h2 className="contactPageTitle">Who I am</h2>
                   <p className="clientDesc1">
                    I am a <span id="text">B.Tech (CSE)</span> student and a passionate MERN Stack Developer with experience in building responsive and user-friendly web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React.js, and Node.js.
                               <br /> <br />
My journey in web development began with a curiosity about how websites work, which gradually turned into a strong passion for creating scalable, efficient, and visually appealing web applications.
                               <br /> <br />
I enjoy transforming ideas into real-world projects through clean, maintainable code and modern design practices. I am always eager to learn new technologies, improve my development skills, and stay updated with the latest trends in the ever-evolving field of web development.</p>

            </div>
            <div id="contacts">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to contact me </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                  <input type="text" name="your_name" placeholder="Your Name" className="name"  required />
                    <input type="email" name="your_email" placeholder="Your Email" className="email"  required/>
                      <textarea name="message" rows="5" placeholder="Your Message" className="msg" required></textarea>
                      <button type="submit" className="submitbtn">Submit</button>

                   
                </form>
            </div>
         </div>   
        </section>
    )
}
export default Contact