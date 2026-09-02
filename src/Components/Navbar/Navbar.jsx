import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underLine from '../../assets/underLine.svg'
import {Link}  from 'react-scroll'
import thougle from '../../assets/touhgle.svg'
import cross from '../../assets/cross.svg'
import { useRef } from "react";
function Navbar() {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef(); //creates a reference that can point to something.
  const openMenu =()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu =()=>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <img src={thougle} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className='nav-menu'>
          <img src={cross} onClick={closeMenu} alt="" className='nav-mob-close' />
            <li><Link className='anchor-link' smooth={true} duration={500}  to = 'home'><p onClick ={()=>setMenu("home")}>Home</p></Link>{menu === "home"? <img src={underLine} alt="underline"/>:<></>} </li>
            <li ><Link className='anchor-link' smooth={true} duration={500} offset={50} to = 'about'><p onClick ={()=>setMenu("about")}>About Me</p></Link>{menu === "about"? <img src={underLine} alt="underline"/>:<></>} </li>
            <li ><Link className='anchor-link' smooth={true} duration={500} offset={50} to = 'works'><p onClick ={()=>setMenu("portfolio")}>Portfolio</p></Link>{menu === "portfolio"? <img src={underLine} alt="underline"/>:<></> }</li>
            <li ><Link className='anchor-link' smooth={true} duration={500} offset={50} to = 'contact'><p onClick ={()=>setMenu("contact-me")}>Contact Me</p></Link>{menu === "contact-me"? <img src={underLine} alt="underline"/>:<></> }</li>
        </ul>

        <div className="nav-connect"><Link className='anchor-link' smooth={true} duration={500} offset={50} to = 'contact'>connect with me </Link></div>
    </div>
  )
}

export default Navbar