import React from 'react'
import {BiLogoInstagram,BiLogoTwitter,BiLogoLinkedin,BiLogoGithub} from "react-icons/bi"


const SOCIALS=[
     {name:"linkedin",link:"https://www.linkedin.com/in/k-riyasat-ali-b026b2217/",image:<BiLogoLinkedin />},
     {name:"github",link:"https://github.com/Riyasatt",image:<BiLogoGithub />},
     {name:"instagram",link:"https://www.instagram.com/riyasatttt/",image:<BiLogoInstagram />},
     {name:"twitter",link:"https://twitter.com/Riyasattt",image:<BiLogoTwitter />},
]

const Social = () => {
  return (
    <div className='flex flex-row xl:flex-col gap-x-3 xl:gap-x-0 xl:gap-y-5 text-white xl:fixed bottom-10 right-10'>
          {SOCIALS.map((social)=>(
               <a href={social.link} target='_blank' className=' p-2 rounded-full bg-accent xl:hover:bg-accent2 xl:hover:text-black text-lg xl:text-2xl cursor-pointer'>
                    {social.image}
               </a>
          ))}
    </div>
  )
}

export default Social