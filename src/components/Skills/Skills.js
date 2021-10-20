import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div>
            <section className="section-skills">
                <h1>Skills</h1>
                <hr/>
                <div className="container-fluid cards-container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card-skills">
                                <div className="card-skills-body">
                                    <span class="material-icons-outlined">code</span>
                                    <h2>Frontend</h2>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Redux</li>
                                        <li>HTML, CSS, Javascript</li>
                                        <li>JQuery, JQuery UI</li>
                                        <li>Bootstrap 5</li>
                                        <li>Responsive Design</li>
                                        <li>User-Frinedly Templates</li>
                                        <li>Browser Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-skills">
                                <div className="card-skills-body">
                                    <span class="material-icons-round">storage</span>
                                    <h2>Backend</h2>
                                    <ul>
                                        <li>Django</li>
                                        <li>Python</li>
                                        <li>PostgreSQL</li>
                                        <li>Model-View-Template</li>
                                        <li>Integrating with REST APIs</li>
                                        <li>Familiarity with Servers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card-skills">
                                <div className="card-skills-body">
                                    <span class="material-icons-round">dvr</span>
                                    <h2>Others</h2>
                                    <ul>
                                        <li>Fluent in C,C++</li>
                                        <li>Wordpress Themes</li>
                                        <li>Git and GitHub</li>
                                        <li>Algorithms</li>
                                        <li>Data Structures</li>
                                        <li>Programming Operating System</li>
                                        <li>Data Science</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
