import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'

const Contact = () => {
     const {theme}=useContext(ThemeContext)

     return (
       <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='contact'>
        About
        </div>
     )
}

export default Contact