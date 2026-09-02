 import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import email from '../../assets/email.svg'
import call from '../../assets/phone.svg'
import location from '../../assets/location.svg'
function Contact() {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8c2e8815-c5ce-4fd3-ba5e-93bf8d0ac154");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
 
  
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left"><h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a massage about anything you eant me to work on. you can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                  <img src= {email}alt="" /> <p>meklitt.16@gmil.com</p>
                </div>
                <div className="contact-detail">
                  <img src={call} alt="" /> <p>+251-926-1724-90</p> 
                </div>
                <div className="contact-detail">
                   <img src={location} alt="" /> <p>Addis Ababa, Ethiopa</p>
                </div>
                </div>
                </div>
               <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' placeholder='Enter your name' name='name' />
                <label htmlFor="email">Your Email</label>
                <input id='email' type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="massage">write you massage here</label>
                <textarea id='massage' name="massage" rows={8} placeholder='Enter your massage'></textarea>
                <button type='submit' className='contact-submit'>submit now</button>

                </form> 
        </div>
    </div>
  )
}

export default Contact;