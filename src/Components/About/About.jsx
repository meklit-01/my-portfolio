import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            
            <div className="about-right">
            <div className="about-para">
                <p>I am a passionate Computer Science graduate interested in software and web development. I enjoy building clean, responsive, and user-friendly websites.</p>
                <p>I am always learning, improving my skills, and turning ideas into useful digital experiences.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML &CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JacaScript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                
            </div>
            
        </div>
            </div>
            <div className="abut-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
        

        
        </div>
    </div>
  )
}

export default About;