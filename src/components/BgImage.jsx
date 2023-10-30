import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

const BgImage = () => {

  const {theme}= useContext(ThemeContext)
  return (
    <div className= {`w-full min-h-screen ${theme === "light" ? "bg-home" : ""} bg-cover bg-center bg-no-repeat  absolute -z-10 opacity-40 blur-sm `} >
    </div>
  )
}

export default BgImage