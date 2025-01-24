import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skills</span>
            <span className="skillDesc">"Front-End Developer skilled in building responsive web applications using HTML, CSS, JavaScript, and React.js. Experienced in API integration, responsive design, and delivering user-centric solutions within agile teams."</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src="frontend.png" alt="versioncontrol" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Responsive Web Design</h2>
                        <p>Expertise in creating visually appealing, mobile-first designs with modern CSS techniques like Flexbox, Grid, and media queries.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="backend.png" alt="versioncontrol" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JavaScript (ES6+) and Interactive UI Development</h2>
                        <p>Proficient in writing clean and efficient JavaScript for dynamic and engaging interfaces.
                            Experience with event handling, DOM manipulation, and building reusable components.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src="apidevelopment.png" alt="apidevelopment" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML5 and Semantic Markup</h2>
                        <p>Skilled in writing semantic HTML to ensure web accessibility and SEO best practices.
                            Familiar with XHTML for legacy browser support.</p>
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