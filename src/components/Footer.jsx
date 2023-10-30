import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import Social from './Social'

const Footer = () => {
     const {theme}=useContext(ThemeContext)

  return (
    <footer>
          <div className={` min-h-20 text-black bg-accent2 overflow-hidden py-3`} id='home'>
               <div className='flex flex-col gap-y-1 items-center h-full'>
                    <div className=' text-center h3'>
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