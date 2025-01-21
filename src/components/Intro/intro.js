import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varad</span> <br />Full Stack Developer</span>
        <p className="introPara">Recent graduate with a passion for technology and problem-solving. Skilled in full-stack development and eager to join to gain real-world IT experience, refine my technical skills, and contribute effectively to innovative projects.</p>
        <Link to="contactPage" smooth={true} offset={-50} duration={500} ><button className="btn"><img src="hiremelogo.png" alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        {/* <img src="employee.png" alt="Profile" className="bg"/> */}
      </div>
    </section>
  )
}

export default Intro;