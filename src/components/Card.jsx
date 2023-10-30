import React, { useContext } from 'react'
import { ThemeContext } from '../Context'
import {BiLinkExternal,BiCodeAlt} from "react-icons/bi"
import Reveal from './Reveal'

const Card = ({ image, link, github, title, stack }) => {
   const {theme}=useContext(ThemeContext)

   return (
      <div className={`rounded-xl overflow-hidden  w-[400px] h-[300px] relative group border-b-8 border-accent text-white cursor-pointer`}>
         <Reveal>
         <div>
         <img src={image} alt="" className=' object-cover w-[400px] h-[300px]' />
         </div>
         </Reveal>
         <div className=' absolute  w-full bottom-0 h-[44px] md:h-[48px] group-hover:h-48 transition-all duration-500  bg-black/60 backdrop-blur '>
            <Reveal>
            <h1 className='h2 bg-accent2 text-black px-4 py-2 !font-bold'>{title}</h1>
            </Reveal>
            <div className='w-full h-[80%]  py-4 px-4 hidden opacity-0 group-hover:opacity-100 group-hover:flex flex-col justify-between transition-all duration-500'>
               <Reveal>
            <p>TechStack : {stack}</p>
            </Reveal>
            <div className='  flex justify-between text-lg'>
               <a href={link} target='_blank' className='px-3 py-2 flex gap-x-4 items-center rounded-xl bg-black/90'>
                  <div>View</div>
                  <BiLinkExternal />
               </a>
               <a href={github} target='_blank' className='px-3 py-2 flex gap-x-4 items-center rounded-xl bg-black/90'>
                  <div>Code</div>
                  <BiCodeAlt />
               </a>

            </div>
            </div>
         </div>
      </div>
   )
}

export default Card