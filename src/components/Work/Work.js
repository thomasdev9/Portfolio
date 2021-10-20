import React from 'react'
import './Work.css'
import Image1 from './images/image_1.jpg'
import Image2 from './images/image_2.jpg'
import Image3 from './images/image_3.jpg'
import Image4 from './images/image_4.jpg'
import Image5 from './images/image_5.jpg'
import Image6 from './images/image_6.jpg'

function Work() {
    return (
        <div>
            <section className="section-work">
                <h1>Personal Projects</h1>
                <hr/>
                <div className="container-fluid work-container">
                    <div className="row">
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Ted')}>
                            <div className="work-card">
                                <div className="work-card-body">
                                <img src={Image1}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>Front-end employment-oriented online service</h6>
                                    <div className="tags-container">
                                        <button>React JS</button>
                                        <button>HTML 5</button>
                                        <button>CSS 3</button>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Django_Backend/tree/master')}>
                            <div className="work-card">
                                <div className="work-card-body">
                                    <img src={Image2}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>Back-end employment-oriented online service</h6>
                                    <div className="tags-container">
                                        <button>Django</button>
                                        <button>Python</button>
                                        <button>PostgreSQL</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Todo-List/tree/master')}>
                        <div className="work-card">
                                <div className="work-card-body">
                                    <img src={Image3}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>To-Do List <br/> GitHub Repository</h6>
                                    <div className="tags-container">
                                        <button>React JS</button>
                                        <button>HTML 5</button>
                                        <button>CSS 3</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Theme')}>
                            <div className="work-card">
                                <div className="work-card-body">
                                    <img src={Image4}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>Theme for Blog <br/> GitHub Repository</h6>
                                    <div className="tags-container">
                                        <button>React JS</button>
                                        <button>HTML 5</button>
                                        <button>CSS 3</button>
                                    </div>
                                </div>
                            </div>      
                        </div>
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Travel_Website/tree/master')}>
                            <div className="work-card">
                                <div className="work-card-body">
                                    <img src={Image5}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>Front-end Web Page for Travel Agency</h6>
                                    <div className="tags-container">
                                        <button>React JS</button>
                                        <button>HTML 5</button>
                                        <button>CSS 3</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="col-3" onClick={() => window.open('https://github.com/thomasdev9/Blog')}>
                        <div className="work-card">
                                <div className="work-card-body">
                                    <img src={Image6}/>
                                </div>
                                <div className="work-card-footer">
                                    <h6>Web Page for Blog <br/> GitHub Repository</h6>
                                    <div className="tags-container">
                                        <button>React JS</button>
                                        <button>HTML 5</button>
                                        <button>CSS 3</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work
