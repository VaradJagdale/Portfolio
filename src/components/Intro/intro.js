import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varad</span> <br />FullStack Developer</span>
        <p className="introPara">"Passionate about building modern web applications, I specialize in creating scalable and user-friendly solutions using the MERN stack, MySQL, and Tailwind CSS. With a strong foundation in front-end and back-end development, I focus on writing clean, efficient code and optimizing performance for a seamless user experience."</p>
        <Link to="contactPage" smooth={true} offset={-50} duration={500} ><button className="btn"><img src="hiremelogo.png" alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        {/* <img src="employee.png" alt="Profile" className="bg"/> */}
      </div>
    </section>
  )
}

export default Intro;