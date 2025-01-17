import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varad</span> <br />Full Stack Developer</span>
        <p className="introPara">"Driven by a passion for technology and problem-solving, I specialize in creating modern, scalable web applications using Python, Java, and the MERN stack. With expertise in API integration, database optimization, and responsive design, I strive to deliver impactful solutions through teamwork and innovation."</p>
        <Link to="contactPage" smooth={true} offset={-50} duration={500} ><button className="btn"><img src="hiremelogo.png" alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        {/* <img src="employee.png" alt="Profile" className="bg"/> */}
      </div>
    </section>
  )
}

export default Intro;