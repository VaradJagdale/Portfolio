import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">A collection of full-stack projects demonstrating my ability to design responsive UIs, develop robust back-end systems, and deliver seamless end-to-end solutions.</span>
      <div className="projectsImgs">
      <div className="projectsImgContainer">
          <a href="https://chat-app-mern-vdim.onrender.com" target='_blank' rel="noopener noreferrer">
            <img src="pro3.jpg" alt="" className="projectsImg" />
          </a>
          <h3 className="projectsImgTitle">Real-Time Chat App</h3>
        </div>

        <div className="projectsImgContainer">
          <a href="https://super-truffle-55f35d.netlify.app" target='_blank' rel="noopener noreferrer">
            <img src="pro1.jpg" alt="" className="projectsImg" />
          </a>
          <h3 className="projectsImgTitle">Book Store App</h3>
        </div>

        <div className="projectsImgContainer">
          <a href="https://restaurant-reservation-varad.netlify.app" target='_blank' rel="noopener noreferrer">
            <img src="pro2.jpg" alt="" className="projectsImg" />
          </a>
          <h3 className="projectsImgTitle">Restaurant Reservation System</h3>
        </div>
      </div>
      <button className="projectsBtn">See More</button>
    </section>
  )
}

export default Projects;