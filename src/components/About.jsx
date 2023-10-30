import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import TechStack from './TechStack'
import Button from './Button'
import Reveal from './Reveal'

const About = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme === "light" ? "text-black" : "text-white"} overflow-hidden`} id='about'>
      <div className=' h-full  flex flex-col-reverse gap-y-5 lg:flex-row  py-20 lg:py-48  justify-around items-center px-5 lg:px-0'>
        <div className='h-full flex justify-center gap-y-3 '>
          <Reveal>
            <TechStack />
          </Reveal>
        </div>

          <div className='lg:w-1/3 flex flex-col gap-y-5'>
          <Reveal>
            <div className='h1'>
              About
            </div>
            </Reveal>
            <Reveal>
            <div className={`py-6 rounded-2xl`}>
              As an aspiring front-end developer based in Delhi, I'm K. Riyasat Ali, an undergraduate with a passion for merging creativity and technical finesse. Specializing in crafting immersive and user-friendly interfaces, I bring a dynamic approach to web development. Grounded in computer science fundamentals, I excel at transforming ideas into visually stunning and responsive websites. Constantly adapting to the latest technologies, my commitment lies in pushing the boundaries of front-end development in the vibrant landscape of Delhi and beyond.
            </div>
            </Reveal>
            <Reveal>
              <div className='flex'>
            <a href="/src/assets/resume.pdf" download className=''>
              <Button name="Resume" classes="hover:text-black hover:bg-accent2" />
            </a>
            </div>
            </Reveal>
          </div>

      </div>

    </div>
  )
}

export default About