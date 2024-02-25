import React from 'react'
import Social from './Social'
import { useContext } from 'react'
import { ThemeContext } from '../Context'

const Footer = () => {
     const {theme}=useContext(ThemeContext)
  return (
    <footer>
          <div className={` min-h-20 text-black  overflow-hidden py-3 border-t-[1px] ${theme==="dark" ? "border-white/10" : "border-black/10" } `} id='home'>
               <div className='flex flex-col gap-y-1 items-center h-full'>
                    <div className={` ${theme==="dark" ? "text-white" : "text-black" }  font-extralight`}>
                         Made with &#10084; by Riyasat
                    </div>
                    <div className=' xl:hidden'>
                         <Social />
                    </div>
               </div>

          </div>  
    </footer>
  )
}

export default Footer