import React, { useContext } from 'react'
import wave from "/src/assets/waving-hand.gif"
import { ThemeContext } from '../Context'
import HeroImg from "/src/assets/Riyasat.jpg"
import FloatingDiv from './FloatingDiv'
import Button from './Button'

const Home = () => {
  const {theme}=useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='home'>
     <div className=' h-full  flex flex-col-reverse gap-y-5 lg:flex-row py-20 lg:py-48  justify-around items-center px-5 lg:px-0'>
        <div className='flex flex-col gap-y-3 lg:w-1/2 2xl:w-1/3'>
          <div className=' flex items-center gap-x-3'>
            <img src={wave} alt='wave' width={35} />
            <div className='h3'>
              Heyy!!
            </div>
          </div>
          <div className='h1'>
            I'm Riyasat Ali
          </div>
          <div className='h2'>
            I am a <span className=' text-accent'>Front End Developer</span>
          </div>
          <div>
          Experienced front-end developer with a passion for creating visually appealing and user-friendly websites, adept at translating design concepts into seamless, responsive interfaces.
          </div>
          <div className=' mt-6'>
          <Button name="About Me" classes="hover:text-black hover:bg-accent2" />
          </div>
        </div>
        <div className='  flex justify-center lg:block lg:pr-10 relative p-10 '>
          <img src={HeroImg} alt="" className=' animate-blob-normal w-[300px] md:w-[380px] border-b-[10px] border-r-4 border-accent lg:hover:border-accent2 transition-all duration-300'/>
          <FloatingDiv image="/src/assets/mui.png" classes="w-[60px] md:w-[70px] absolute top-2 left-5 " />
          <FloatingDiv image="/src/assets/react.png" classes="w-[60px] md:w-[70px] absolute top-48 -left-14 " />
          <FloatingDiv image="/src/assets/tailwind.png" classes="w-[60px] md:w-[70px] absolute top-20 -left-10 " />
          <FloatingDiv image="/src/assets/html.png" classes="w-[75px] md:w-[85px] absolute bottom-0 -left-0 " />
          <FloatingDiv image="/src/assets/node.png" classes="w-[70px] md:w-[80px] absolute top-20 -right-6 " />
        </div>
     </div>
    </div>
  )
}

export default Home