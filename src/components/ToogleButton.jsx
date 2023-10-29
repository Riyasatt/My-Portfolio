import React, { useContext } from 'react'
import {BiMoon,BiSun} from "react-icons/bi"
import { ThemeContext } from '../Context'


const ToogleButton = () => {
     const {theme,setTheme} = useContext(ThemeContext)

     const toogle=()=>{
          setTheme(theme==="light" ? "dark" : "light")
     }
     
  return (
    <button className= {`p-[5px] rounded-full ${theme==="dark" ? "bg-accent/80" : "bg-"} `} onClick={toogle}>
          {theme === "light" ? <BiMoon /> : <BiSun />}
    </button>

  )
}

export default ToogleButton