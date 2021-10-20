import React from 'react'
import './Experience.css'

function Experience() {
    return (
        <div>
            <section className="section-experience">
                <h1>Experience</h1>
                <hr className="experience-hr"/>
                <div className="section-container">
                    <div className="experience-container">
                        <h5>Work Experience</h5>
                        <hr/>
                        <h5 className="work-title">Front-End Developer - Internship <br/> Linakis Digital, Athens, Greece </h5>
                        <span>July 2019–February 2020</span>
                        <ul>
                            <li>Maintain and improve company website</li>
                            <li>Determining the structure and design of web pages</li>
                            <li>Developing features to enhance the user experience</li>
                            <li>Design mobile-based features</li>
                            <li>Form Validation</li>
                            <li>Client side validation</li>
                            <li>SEO Optimization</li>
                        </ul>
                    </div>
                    <div className="education-container">
                        <h5>Education</h5>
                        <hr/>
                        <h5 className="education-title">Department of Informatics and Telecommunications, <br/>National and Kapodistrian University of Athens, Greece </h5>
                        <span>October 2016 – Present</span>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Experience
