import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import {BiX} from "react-icons/bi"

const NAV_LINK=[
     {name:"Home",path:"#home"},
     {name:"About",path:"#about"},
     {name:"Projects",path:"#project"},
     {name:"Contact",path:"#contact"}
   ]

const Nav_Link = () => {

  const {theme,navbar,mobNav,setMobNav}=useContext(ThemeContext)

  const hideNav = () => {
    setMobNav(false)
  }

  return (
    <div>
    <div className={` ${mobNav ? "bg-black/50 right-0" : " right[-100%]" } absolute  md:hidden h-screen w-screen top-0 transition-all `} onClick={hideNav}>
          </div>
    <div className={` ${mobNav ? "right-0" : "right-[-100%]"} absolute md:static h-screen pl-10  md:pl-0 w-[70%] md:w-auto top-0 py-20 md:py-0 bg-accent md:bg-transparent md:h-auto  flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-8 md:items-center  transition-all md:transition-none duration-500 `}>
      <div className=' md:hidden text-4xl absolute top-3 right-3 text-white' onClick={hideNav}>

        <BiX />
      </div>
     {NAV_LINK.map((link)=>(
          <a href={link.path} className={`border-b border-transparent  ${theme === "light" ? navbar || mobNav ? "hover:text-accent2 md:hover:border-accent2 text-white" :" hover:text-accent2 md:hover:text-accent md:hover:border-accent2" : "hover:text-accent2 md:hover:border-accent2"}`} onClick={hideNav}>{link.name}</a>
     ))}
    </div>
    </div>

  )
}

export default Nav_Link