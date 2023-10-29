import React, { useContext } from 'react'
import { ThemeContext } from '../Context'

const NAV_LINK=[
     {name:"Home",path:"#home"},
     {name:"About",path:"#about"},
     {name:"Projects",path:"#project"},
     {name:"Contact",path:"#contact"}
   ]

const Nav_Link = () => {

  const {theme,navbar}=useContext(ThemeContext)
  return (
    <div className=' flex gap-x-8 items-center '>
     {NAV_LINK.map((link)=>(
          <a href={link.path} className={` border-b border-transparent ${theme === "light" ? navbar ? "hover:text-accent2 hover:border-accent2" :"hover:text-accent hover:border-accent2" : "hover:text-accent2 hover:border-accent2"}`}>{link.name}</a>
     ))}
    </div>
  )
}

export default Nav_Link