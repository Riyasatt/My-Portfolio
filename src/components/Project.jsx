import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import Card from './Card'
import Reveal from './Reveal'

const PROJECTS=[
  {
       title:"Crypto Trackr",
       image:"/src/assets/crypto-tracker.png",
       stack:"Reactjs, JavaScript, Material UI, Coingecko API",
       link:"https://lustrous-crypto-trackr.netlify.app/",
       github:"https://github.com/Riyasatt/CryptoTrackr"
  },
  {
       title:"Netflix UI Clone",
       image:"/src/assets/netflix.png",
       stack:"JavaScript, CSS3, HTML5",
       link:"https://endearing-sprinkles-ac5a08.netlify.app",
       github:"1"
  },
  {
       title:"To Do List",
       image:"/src/assets/to-do-list.png",
       stack:"JavaScript, CSS3, HTML5",
       link:"https://bazinga-to-do-list.netlify.app",
       github:"1"
  },
  {
       title:"Calculator",
       image:"/src/assets/calculator.png",
       stack:"JavaScript, CSS3, HTML5",
       link:"https://gorgeous-valkyrie-0505db.netlify.app",
       github:"1"
  },
  {
       title:"Landing Page",
       image:"/src/assets/landing-page.png",
       stack:"JavaScript, CSS3, HTML5",
       link:"https://roaring-elf-a4a2a2.netlify.app",
       github:"1"
  },
  {
       title:"Portfolio",
       image:"/src/assets/portfolio.png",
       stack:"Reactjs, JavaScript, Tailwind CSS, Context API",
       link:"1",
       github:"1"
  },

]

const Project = () => {
     const {theme}=useContext(ThemeContext)

  return (
    <div className={` min-h-screen ${theme==="light" ? "text-black" : "text-white"} overflow-hidden`} id='project'>
     <Reveal>
     <div className='heading tracking-widest text-center '>
        Projects
     </div>
     </Reveal>
     <div className='px-4 md:px-0 max-w-[1300px] mx-auto py-12 md:py-20' >
     <div className=' flex flex-wrap gap-5 justify-center '>
        {PROJECTS.map((project)=>{
          return(

          <Card 
          title={project.title} 
          link={project.link} 
          image={project.image} 
          github={project.github} 
          stack={project.stack} />

          )
        })}
     </div>
     </div>
     </div>
  )
}

export default Project

