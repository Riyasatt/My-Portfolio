import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav_Link from './Nav_Link'
import {HiMiniBars3BottomRight} from "react-icons/hi2"
import ToogleButton from './ToogleButton'
import { ThemeContext } from '../Context'
import DarkLogo from "/src/assets/logo-light.png"
import LightLogo from "/src/assets/logo-dark.png"


const navbar = () => {
    const {theme,navbar,setNavbar,setMobNav}=useContext(ThemeContext)

    const changeNav=()=>{
      if(window.scrollY >40){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }

    const showNav=()=>{
      setMobNav(true)
    }

    window.addEventListener('scroll',changeNav)
  return (
     <nav className= {`fixed z-20 w-full duration-200 h-16 lg:h-[60px]  ${theme==="light" ? "text-black" :"text-white" } ${navbar ? "bg-accent !text-white" :"bg-none"}` } >
      <div className='padding-container border-purple-6001 borde1r  h-full  ' >
        <div className='flex justify-between items-center h-full'>
          <div className=' '>
            <Link to="/" >
              <img src={theme=="light" ? navbar ? LightLogo:DarkLogo : LightLogo} className='w-[25px]' />
            </Link>
          </div>
          <div className='hidden text-lg md:flex items-center gap-x-10'>
              <Nav_Link />
              <div className=' text-xl'>
              <ToogleButton />
              </div>
          </div>
          <div className='flex md:hidden text-lg items-center font-semibold'>
            <ToogleButton />
            <div className='text-xl ml-5' onClick={showNav} >
              <HiMiniBars3BottomRight />
            </div>
            <Nav_Link />
          </div>
        </div>
      </div>
     </nav>
  )
}

export default navbar