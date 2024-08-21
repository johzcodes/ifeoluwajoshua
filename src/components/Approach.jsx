import React from 'react'
import react from '../assets/react.svg'
import nodejs from '../assets/nodejs.png'
import js from '../assets/js.png'
import python from '../assets/python.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import '../styles/style.css'

const Approach = () => {
  return (
    <>
    <div>
        <h1 className="text-5xl mt-12 mb-12 font-bold">My <span className="text-purple-500 underline">Approach</span></h1>
        <p className="leading-8" >I'm currently seeking new opportunities to <span className="text-green-500">collaborate</span> on exciting projects. Feel free to <span className="text-orange-500">reach out</span> if you're looking for a dedicated <span className="text-red-500">developer</span> to bring your ideas to life. Let's build something amazing together!</p>
        <p>I enjoy tackling challenges that push the boundaries of what's possible in web development.</p>
    </div>
    <div className="stack text-items mt-16 mb-8 ">
    <h1 className="text-3xl underline">My Stacks</h1>
    </div>
    <div className="flex justify-between stacks mb-20">
      <img  src={react} alt="" />
      <img src={js} alt=""  />
      <img src={python} alt="" />
      <img src={django} alt="" />
      <img  src={nodejs} alt="" />
      <img src={html} alt="" />
      <img src={css} alt="" />
    </div>

    </>
  )
}

export default Approach