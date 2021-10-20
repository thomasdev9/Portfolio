import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div>
            <section className="section-hero">
                <div className="hero-text">
                    <h1 className="dev-name">Thomas Poulakis</h1>
                    <h1 className="dev-profession">I build apps for the web.</h1>
                    <p className="dev-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="dev-button">Contant with me</button>
                </div>
            </section>
        </div>
    )
}

export default Hero
