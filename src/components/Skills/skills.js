import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">My Skills</span>
        <span className="skillDesc">"Proficient Full Stack Developer with hands-on experience in building dynamic and responsive web applications using PHP, Node.js, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in both front-end and back-end development, leveraging frameworks like CodeIgniter and MySQL to create scalable, user-centric, and high-performance solutions. Adept at API integration, database optimization, and collaborating within agile teams to deliver impactful software."
</span>

       <div className="skillBars">
            <div className="skillBar">
                <img src="frontend.png" alt="versioncontrol" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Frontend Development</h2>
                    <p>"Proficient in HTML, CSS, and JavaScript, with experience building responsive and dynamic user interfaces using React.js. I utilize modern tools like Vite to enhance performance and deliver an exceptional user experience."</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="backend.png" alt="versioncontrol" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>"Experienced in developing scalable and efficient backend systems using Node.js and PHP, with expertise in frameworks like Express.js, CodeIgniter, and Laravel. I focus on building secure and robust APIs for seamless application functionality."</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="apidevelopment.png" alt="apidevelopment" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>API Development</h2>
                    <p>"Skilled in developing RESTful APIs using Node.js and Express.js, ensuring secure, efficient, and scalable communication between frontend and backend systems."</p>
                </div>
            </div>

            <div className="skillBar">
                <img src="databasemanagement.png" alt="databasemanagement" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Database Management</h2>
                    <p>"Proficient in designing, implementing, and optimizing databases using MySQL and MongoDB. I ensure efficient data storage and retrieval, enabling high-performance web applications."</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills