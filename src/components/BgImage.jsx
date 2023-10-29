import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

const BgImage = () => {

  const {theme}= useContext(ThemeContext)
  return (
    <div className= {`w-full h-screen ${theme === "light" ? "bg-home" : ""} bg-cover bg-center bg-no-repeat  absolute -z-10 `} >
    </div>
  )
}

export default BgImage