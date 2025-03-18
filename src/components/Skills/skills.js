import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skills</span>
            <span className="skillDesc">MERN Full Stack Developer with experience in building responsive and scalable web applications using MongoDB, Express.js, React.js, Node.js. Proficient in front-end and back-end development, API integration, and database optimization, with a focus on delivering high-performance and user-friendly solutions.</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src="frontend.png" alt="versioncontrol" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>Proficient in HTML, CSS, and JavaScript, with hands-on experience in React.js.
                            Experienced in building responsive, interactive UI using Tailwind CSS and modern frameworks.
                            Utilized Vite for fast and optimized front-end development.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="backend.png" alt="versioncontrol" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Skilled in Node.js and Express.js, developing scalable and efficient server-side applications.
                        Experience in building RESTful APIs for seamless communication between front-end and back-end.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="apidevelopment.png" alt="apidevelopment" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Management</h2>
                        <p>Proficient in MongoDB and MySQL, designing optimized database structures for high performance.
                        Experience in managing data integrity and implementing efficient queries.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="databasemanagement.png" alt="databasemanagement" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Version Control with Git & GitHub</h2>
                        <p>Experienced in managing code versions, collaborating in teams, and maintaining clean workflows using Git and GitHub.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills