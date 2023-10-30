import React, { useContext } from 'react'
import {BiLinkExternal,BiCodeAlt} from "react-icons/bi"
import Reveal from './Reveal'
import crypto from "/src/assets/crypto-tracker.png"
import netflix from "/src/assets/netflix.png"
import todo from "/src/assets/to-do-list.png"
import calculator from "/src/assets/calculator.png"
import landing from "/src/assets/landing-page.png"
import portfolio from "/src/assets/portfolio.png"



const PROJECTS=[
   {
        title:"Crypto Trackr",
        image:crypto,
        stack:"Reactjs, JavaScript, Material UI, Coingecko API",
        link:"https://lustrous-crypto-trackr.netlify.app/",
        github:"https://github.com/Riyasatt/CryptoTrackr"
   },
   {
        title:"Netflix UI Clone",
        image:netflix,
        stack:"JavaScript, CSS3, HTML5",
        link:"https://endearing-sprinkles-ac5a08.netlify.app",
        github:"1"
   },
   {
        title:"To Do List",
        image:todo,
        stack:"JavaScript, CSS3, HTML5",
        link:"https://bazinga-to-do-list.netlify.app",
        github:"1"
   },
   {
        title:"Calculator",
        image:calculator,
        stack:"JavaScript, CSS3, HTML5",
        link:"https://gorgeous-valkyrie-0505db.netlify.app",
        github:"1"
   },
   {
        title:"Landing Page",
        image:landing,
        stack:"JavaScript, CSS3, HTML5",
        link:"https://roaring-elf-a4a2a2.netlify.app",
        github:"1"
   },
   {
        title:"Portfolio",
        image:portfolio,
        stack:"Reactjs, JavaScript, Tailwind CSS, Context API",
        link:"1",
        github:"1"
   },
 
 ]

const Card = () => {

   return (
      <div className=' flex flex-wrap gap-5 justify-center '>

         {PROJECTS.map((project)=>(
            <div className={`rounded-xl overflow-hidden  w-[400px] h-[300px] relative group border-b-8 border-accent text-white cursor-pointer`}>
            <Reveal>
            <div>
            <img src={project.image} alt="" className=' object-cover w-[400px] h-[300px]' />
            </div>
            </Reveal>
            <div className=' absolute  w-full bottom-0 h-[44px] md:h-[48px] group-hover:h-48 transition-all duration-500  bg-black/60 backdrop-blur '>
               <Reveal>
               <h1 className='h2 bg-accent2 text-black px-4 py-2 !font-bold'>{project.title}</h1>
               </Reveal>
               <div className='w-full h-[80%]  py-4 px-4 hidden opacity-0 group-hover:opacity-100 group-hover:flex flex-col justify-between transition-all duration-500'>
                  <Reveal>
               <p>TechStack : {project.stack}</p>
               </Reveal>
               <div className='  flex justify-between text-lg'>
                  <a href={project.link} target='_blank' className='px-3 py-2 flex gap-x-4 items-center rounded-xl bg-black/90'>
                     <div>View</div>
                     <BiLinkExternal />
                  </a>
                  <a href={project.github} target='_blank' className='px-3 py-2 flex gap-x-4 items-center rounded-xl bg-black/90'>
                     <div>Code</div>
                     <BiCodeAlt />
                  </a>
   
               </div>
               </div>
            </div>
         </div>
         ))}
      
      </div>
   )
}

export default Card