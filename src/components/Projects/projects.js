import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectsDesc">A collection of innovative full-stack projects that showcase my ability to design responsive user interfaces, develop robust backend systems, and deliver seamless user experiences through end-to-end solutions.</span>
        <div className="projectsImgs">
          <div className="projectsImgContainer">
        <a href="https://restaurant-reservation-varad.netlify.app">
           <img src="project.jpg" alt="" className="projectsImg" />
        </a>
        <h3 className="projectsImgTitle">Restaurant Reservation System</h3>
        </div>

        <div className="projectsImgContainer">
           <img src="project2.jpg" alt="" className="projectsImg" />
        <h3 className="projectsImgTitle">Coming Soon</h3>
        </div>
        </div>
        <button className="projectsBtn">See More</button>
    </section>
  )
}

export default Projects;