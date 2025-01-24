import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varad</span> <br />Front-End Developer</span>
        <p className="introPara">Passionate about crafting responsive and accessible web interfaces using HTML, CSS, and JavaScript. I specialize in delivering user-friendly designs that enhance usability and performance.</p>
        <Link to="contactPage" smooth={true} offset={-50} duration={500} ><button className="btn"><img src="hiremelogo.png" alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        {/* <img src="employee.png" alt="Profile" className="bg"/> */}
      </div>
    </section>
  )
}

export default Intro;