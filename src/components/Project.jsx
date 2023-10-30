import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import Card from './Card'
import Reveal from './Reveal'


const Project = () => {
     const {theme}=useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='project'>
     <Reveal>
     <div className='heading tracking-widest text-center '>
        Projects
     </div>
     </Reveal>
     <div className='px-4 md:px-0 max-w-[1300px] mx-auto py-12 md:py-20' >
          <Card />
     </div>
     </div>
  )
}

export default Project

