import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import {Link}  from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Meklit Tadesse</span>, fromted developer.</h1>
        <p>I am a junior frontend developer form Ethiopia.</p>
        <div className="hero-action">
            <div className="nav-connect"><Link className='anchor-link' smooth={true} duration={500} offset={50} to = 'contact'>connect with me </Link></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero;