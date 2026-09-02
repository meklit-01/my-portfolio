import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import per from '../../assets/person.svg'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="foter-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a junior frontend developer from, Ethiopia.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={per} alt="" />
                    <input type="text" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe
                </div>
            </div>  
        </div>
        <hr />
        < div className="footer-bottom">
                    <p className="footer-bottom-left">© 2023 Meklit Tadesse. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
    </div>
  )
}

export default Footer;