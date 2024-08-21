import React from 'react'
import '../styles/style.css'

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl mt-12 font-semibold mb-12">My Recent <span className="text-purple-500 underline">Projects</span></h1>
      <div className="projects">
        <div className="box">
          <h3 className="my-8 text-lg">Project Name : <span className="font-normal text-purple-500 underline "><a href="https://artprimes.vercel.app/">Artprimes</a></span></h3>
          <p className="text-sm mb-4 leading-7 font-semibold">Description : <span className="font-normal">An Eccomerce Website Where buyers can meet sellers and negotiate price and place orders. The project is still ongoing and its open sourced. <br /> It's features involve user authetications, monthly newsletter, Shoping Cart, Crud Requests e.t.c</span></p>
          <p className="text-sm leading-7 font-semibold">Stacks : <span className="font-normal">REACTJS, SCSS, NODEJS, MONGODB</span></p>
        </div>
        <div className="box DRAG-APP">
          <h3 className="my-8 text-lg">Project Name : <span className="font-normal text-purple-500 underline ">Draggable Note App</span></h3>
          <p className="text-sm mb-4 leading-7 font-semibold">Description : <span className="font-normal">An Eccomerce Website Where buyers can meet sellers and negotiate price and place orders. The project is still ongoing and its open sourced. <br /> It's features involve user authetications, monthly newsletter, Shoping Cart, Crud Requests e.t.c</span></p>
          <p className="text-sm leading-7 font-semibold">Stacks : <span className="font-normal">HTML, CSS, JAVASCRIPT</span></p>
        </div>
      </div>
      <div className="projects">
        <div className="box">
          <h3 className="my-8 text-lg">Project Name : <span className="font-normal text-purple-500 underline "><a href="https://draggablenoteapplication.netlify.app/">Draggable Note App</a></span></h3>
          <p className="text-sm mb-4 leading-7 font-semibold">Description : <span className="font-normal">An Eccomerce Website Where buyers can meet sellers and negotiate price and place orders. The project is still ongoing and its open sourced. <br /> It's features involve user authetications, monthly newsletter, Shoping Cart, Crud Requests e.t.c</span></p>
          <p className="text-sm leading-7 font-semibold">Stacks : <span className="font-normal">REACTJS, SCSS, NODEJS, MONGODB</span></p>
        </div>
      </div>
      <h1 className="text-5xl mt-20 font-semibold mb-12">My Job <span className="text-purple-500 underline">Experience</span></h1>
    </div>
  )
}

export default Projects