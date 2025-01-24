import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectsDesc">A showcase of front-end projects highlighting my skills in creating responsive designs and seamless user experiences with modern web technologies.</span>
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