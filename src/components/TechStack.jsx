import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import Reveal from './Reveal'
import mui from "/src/assets/mui.png"
import c from "/src/assets/c.png"
import tailwind from "/src/assets/tailwind.png"
import htmlimg from "/src/assets/html.png"
import js from "/src/assets/js.png"
import vite from "/src/assets/vite.png"
import java from "/src/assets/java.png"
import cpp from "/src/assets/cpp.png"
import git from "/src/assets/git.png"
import github from "/src/assets/github.png"
import figma from "/src/assets/figma.png"
import css from "/src/assets/css.png"
import canva from "/src/assets/canva.png"
import react from "/src/assets/react.png"
import bootstrap from "/src/assets/bootstrap.png"


const TECHS=[
     {name:"JavaScript",Image:js,type:"web"},
     {name:"Vite",Image:vite,type:"web"},
     {name:"React",Image:react,type:"web"},
     {name:"Material UI",Image:mui,type:"web"},
     {name:"Tailwind CSS",Image:tailwind,type:"web"},
     {name:"Bootstrap",Image:bootstrap,type:"web"},
     {name:"CSS3",Image:css,type:"web"},
     {name:"HTML5",Image:htmlimg,type:"web"},
     {name:"Java",Image:java,type:"other"},
     {name:"C++",Image:cpp,type:"other"},
     {name:"C",Image:c,type:"other"},
     {name:"Git",Image:git,type:"other"},
     {name:"GitHub",Image:github,type:"other"},
     {name:"Canva",Image:canva,type:"other"},
     {name:"Figma",Image:figma,type:"other"},


]

const TechStack = () => {
     const {tech,setTech,theme}=useContext(ThemeContext)

     const webTech=TECHS.filter((techs) => techs.type === "web")
     const otherTech=TECHS.filter((techs) => techs.type === "other")

     const handleTech=(e)=>{
          setTech(e)
     }

     const showWebTech = webTech.map((link)=>(
          <Reveal>
          <div className=' flex flex-col gap-y-4'>
          <div className={`p-5 w-[90px] h-[90px] ${theme === "light" ? "bg-black/10" : "bg-white/10"} rounded-full flex flex-col justify-center items-center`}>
               <img src={link.Image} alt="" />
          </div>
          <div className=' font-semibold'>
               {link.name}
          </div>
          </div>
          </Reveal>
     ))

     const showOtherTech = otherTech.map((link)=>(
          <Reveal>
          <div className=' flex flex-col gap-y-4'>
          <div className={`p-5 w-[90px] h-[90px] ${theme === "light" ? "bg-black/10 " : "bg-white/10"} rounded-full flex flex-col justify-center items-center`}>
               <img src={link.Image}  alt="" />
          </div>
          <div className=' font-semibold'>
               {link.name}
          </div>
          </div>
          </Reveal>
     ))
     

  return (
     <div>
    <div className=' w-full text-center flex flex-col gap-y-6 py-20 lg:py-0 items-center'>
     <div className='h2'>
          Tech Stack
     </div>
     <div className={`flex justify-center gap-x-6 p-2 ${theme === "light" ? "bg-black/10 " : "bg-white/10 "} rounded-2xl`}>
          <Button name="Web Techs" classes={tech==="web" ? "" : "!bg-transparent !border-2 !border-accent !text-accent "} handleClick={()=>{handleTech("web")}}/>
          <Button name="Other Techs" classes={tech==="other" ? "" : "!bg-transparent !border-2 !border-accent !text-accent"} handleClick={()=>{handleTech("other")}} />
     </div>
     <div className='max-w-[500px] mx-auto'>
     <div className=' flex gap-10 flex-wrap justify-center md:justify-normal'>
          {tech==="other" ? showOtherTech : showWebTech}
     </div>
     </div>
    </div>
    </div>
  )
}

export default TechStack