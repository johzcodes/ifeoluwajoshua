import React from 'react'
import '../styles/style.css'
import github from  "../assets/github.png"
import x from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import email from '../assets/email.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'



import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div data-aos="zoom-out-down" className="words mb-16">
            <h1 className="text-5xl mt-12 font-semibold mb-12">About <span className="text-purple-500 underline">Joshua</span>.</h1>
            <p  className="text-base leading-8 mb-16">Hello! I'm Israel Ifeoluwa Joshua, a passionate <span className="text-green-500">Full stack developer</span> with a love for crafting clean, efficient code. With <span className="text-orange-700 underline">4 years</span> of experience in web development, I thrive in dynamic environments where I can apply my skills in both <span className="text-blue-600">Frontend</span> and <span className="text-red-500">Backend</span> technologies.<br />I specialize in creating responsive, user-friendly web applications that offer seamless experiences across devices. Whether it's building robust APIs or designing intuitive user interfaces.</p>

        <div className="social-links flex my-6">
          <a href="https://x.com/ifeoluwajohz"><img src={x} alt="" /></a>
          <a href="https://github.com/johzcodes"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/ifeoluwajohz/"><img src={linkedin} alt="" /></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><img src={email} alt="" /></a>
          <a href="tel:+8026144324"><img src={whatsapp} alt="" /></a>
          <a href="https://web.facebook.com/profile.php?id=100087388999705"><img src={facebook} alt="" /></a>
        </div>

        </div>
        <div className="achievements mb-10">
          <button className="text-xl text-purple-900 underline font-normal">Download My CV</button>
          <h1 className="text-4xl text-right text-orange-500 font-bold underline">CERTIFICATIONS</h1>
        </div>
        
    </div>
  )
}

export default About