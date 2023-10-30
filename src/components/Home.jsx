import React, { useContext } from 'react'
import wave from "/src/assets/waving-hand.gif"
import { ThemeContext } from '../Context'
import HeroImg from "/src/assets/Riyasat.jpg"
import FloatingDiv from './FloatingDiv'
import Button from './Button'
import Reveal from './Reveal'
import mui from "/src/assets/mui.png"
import c from "/src/assets/c.png"
import tailwind from "/src/assets/tailwind.png"
import htmlimg from "/src/assets/html.png"
import node from "/src/assets/node.png"


const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme === "light" ? "text-black" : "text-white"} overflow-hidden`} id='home'>
      <div className=' h-full  flex flex-col-reverse gap-y-5 lg:flex-row py-20 lg:py-48  justify-around items-center px-5 lg:px-0'>
        <div className='flex flex-col gap-y-3 lg:w-1/2 2xl:w-1/3'>
          <Reveal>
          <div className=' flex items-center gap-x-3'>
            <img src={wave} alt='wave' width={35} />
            <div className='h3'>
              Heyy!!
            </div>
          </div>
          </Reveal>
          <Reveal>
          <div className='h1'>
            I'm Riyasat Ali
          </div>
          </Reveal>
          <Reveal>
          <div className='h2'>
            I am a <span className=' text-accent'>Front End Developer</span>
          </div>
          </Reveal>
          <Reveal>
          <div>
            Experienced front-end developer with a passion for creating visually appealing and user-friendly websites, adept at translating design concepts into seamless, responsive interfaces.
          </div>
          </Reveal>
          <Reveal>
          <div className=' mt-6 flex'>
            <a href="#about">
              <Button name="About Me" classes="hover:text-black hover:bg-accent2" />
            </a>
          </div>
          </Reveal>
          
        </div>
        <Reveal>
        <div className='  flex justify-center lg:block lg:pr-10 relative p-10 '>
          <img src={HeroImg} alt="" className=' animate-blob-normal w-[300px] md:w-[380px] border-b-[10px] border-r-4 border-accent lg:hover:border-accent2 transition-all duration-300' />
          <FloatingDiv image={mui} classes="w-[60px] md:w-[70px] absolute top-2 left-5 " />
          <FloatingDiv image={c} classes="w-[60px] md:w-[70px] absolute top-48 -left-14 " />
          <FloatingDiv image={tailwind} classes="w-[60px] md:w-[70px] absolute top-20 -left-10 " />
          <FloatingDiv image={htmlimg} classes="w-[75px] md:w-[85px] absolute bottom-0 -left-0 " />
          <FloatingDiv image={node} classes="w-[70px] md:w-[80px] absolute top-20 -right-6 " />
        </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Home