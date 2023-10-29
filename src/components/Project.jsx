import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'

const Project = () => {
     const {theme}=useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='project'>
     About
     </div>
  )
}

export default Project