import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {

    const changeNavbar = () => {
        const hamburger = document.querySelector('.hamburger')
        const navLinks = document.querySelector('nav .navbar-menu')
        const links = document.querySelectorAll('nav .navbar-menu li')

        navLinks.classList.toggle('open')
        links.forEach(link => {
            link.classList.toggle('fade')
        })
    }

    return (
        <div>
            <nav>
                <div className="hamburger" onClick={changeNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="navbar-brand-logo">
                    <a>T</a>
                </div>
                <div className="mx-auto"></div>
                <ul className="navbar-menu">
                    <li><a><Link>About</Link></a></li>
                    <li><a>Experience</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Work</a></li>
                    <li><a>Contact</a></li>
                    <li><a className="resume">Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
