import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import TechStack from './TechStack'
import Button from './Button'

const About = () => {
     const {theme}=useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='about'>
      <div className=' h-full  flex flex-col-reverse gap-y-5 lg:flex-row  py-20 lg:py-48  justify-around items-center px-5 lg:px-0'>
        <div className='h-full flex justify-center gap-y-3 lg:w-1/3 2xl:w-1/3'>
          <TechStack />
        </div>
        <div className='lg:w-1/3 flex flex-col gap-y-5'>
          <div className='h1'>
            About
          </div>
          <div>
          As an aspiring front-end developer based in Delhi, I'm [Your Name], an undergraduate with a passion for merging creativity and technical finesse. Specializing in crafting immersive and user-friendly interfaces, I bring a dynamic approach to web development. Grounded in computer science fundamentals, I excel at transforming ideas into visually stunning and responsive websites. Constantly adapting to the latest technologies, my commitment lies in pushing the boundaries of front-end development in the vibrant landscape of Delhi and beyond.
          </div>
          <Button name="Resume" classes="hover:text-black hover:bg-accent2"/>
        </div>
      </div>

     </div>
  )
}

export default About