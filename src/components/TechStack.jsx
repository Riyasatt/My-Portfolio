import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { ThemeContext } from '../Context'

const TECHS=[
     {name:"JavaScript",Image:"/src/assets/js.png",type:"web"},
     {name:"Vite",Image:"/src/assets/vite.png",type:"web"},
     {name:"React",Image:"/src/assets/react.png",type:"web"},
     {name:"Material UI",Image:"/src/assets/mui.png",type:"web"},
     {name:"Tailwind CSS",Image:"/src/assets/tailwind.png",type:"web"},
     {name:"CSS3",Image:"/src/assets/css.png",type:"web"},
     {name:"HTML5",Image:"/src/assets/html.png",type:"web"},
     {name:"Java",Image:"/src/assets/java.png",type:"other"},
     {name:"C++",Image:"/src/assets/cpp.png",type:"other"},
     {name:"C",Image:"/src/assets/c.png",type:"other"},
     {name:"Git",Image:"/src/assets/git.png",type:"other"},
     {name:"GitHub",Image:"/src/assets/github.png",type:"other"},
     {name:"Canva",Image:"/src/assets/canva.png",type:"other"},
     {name:"Netlify",Image:"/src/assets/netlify.png",type:"other"},


]

const TechStack = () => {
     const {tech,setTech,theme}=useContext(ThemeContext)

     const webTech=TECHS.filter((techs) => techs.type === "web")
     const otherTech=TECHS.filter((techs) => techs.type === "other")

     const handleTech=(e)=>{
          setTech(e)
          console.log(tech)
     }

     const showWebTech = webTech.map((link)=>(
          <div className=' flex flex-col gap-y-4'>
          <div className={`p-5 w-[90px] h-[90px] ${theme === "light" ? "bg-black/10 border border-black/20" : "bg-white/10 border border-white/20"} rounded-full flex flex-col justify-center items-center`}>
               <img src={link.Image} alt="" />
          </div>
          <div className=' font-semibold'>
               {link.name}
          </div>
          </div>
     ))

     const showOtherTech = otherTech.map((link)=>(
          <div className=' flex flex-col gap-y-4'>
          <div className={`p-5 w-[90px] h-[90px] ${theme === "light" ? "bg-black/10 border border-black/20" : "bg-white/10 border border-white/20"} rounded-full flex flex-col justify-center items-center`}>
               <img src={link.Image} alt="" />
          </div>
          <div className=' font-semibold'>
               {link.name}
          </div>
          </div>
     ))
          console.log(tech)
     

  return (
     <div>
    <div className=' w-full text-center flex flex-col gap-y-6 py-20 lg:py-0 items-center'>
     <div className='h2'>
          Tech Stack
     </div>
     <div className=' flex justify-center gap-x-6'>
          <Button name="Web Techs" classes={tech==="web" ? "" : "!bg-transparent !border-2 !border-accent !text-accent "} handleClick={()=>{handleTech("web")}}/>
          <Button name="Other Techs" classes={tech==="other" ? "" : "!bg-transparent !border-2 !border-accent !text-accent"} handleClick={()=>{handleTech("other")}} />
     </div>
     <div className=' flex gap-10 flex-wrap justify-center max-w-[500px] mx-auto'>
          {tech==="other" ? showOtherTech : showWebTech}
     </div>
    </div>
    </div>
  )
}

export default TechStack