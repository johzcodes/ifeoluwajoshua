import React, { useState } from 'react'
import '../styles/style.css'
import emoji from '../assets/emoji.png'
import IMG_1 from '../assets/IMG_1.jpg'


const Intro = () => {
  const [email, setEmail] = useState('')

  const handleEmail = async (e) => {
    e.preventDefault
    console.log(email, ';gy')
  }
  return (
    <>
      <section>
        <div className="flex intro">
            <div className='quotes'>
              <div className="">

              <div className="flex mb-4 items-center">
              <h1 className="font-bold  text-yellow-500 text-4xl">Hello Mate,  </h1>
              <img className="w-10 h-10" src={emoji} alt="" />
              {/* <img className="w-10 h-10" src={IMG_1} alt="" /> */}

              </div>

              <h1 className="me font-bold mb-4"> I'm Ifeoluwa Joshua a Web Designer and a Full Stack <span>Web Developer</span></h1>

              </div>
                <p className="text-xl">-"Hi, I am Joshua a Web Developer based in Lagos, Nigeria. I help brands turn their ideas into high quality products ..."</p>
            </div>
            {/* <div className='quotes'>
              <img src={IMG_1} alt="" />

            </div> */}
        </div>
        <form className="newsletter">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address...' className='email'/>
          <button className='subsribe' onSubmit={handleEmail} type="submit">Connect With Me</button>
        </form>
      </section>
    </>
  )
}

export default Intro