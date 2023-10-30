import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import Button from './Button'
import { AiOutlineMail } from "react-icons/ai"
import Reveal from "./Reveal"


const Contact = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <div className={` min-h-screen ${theme === "light" ? "text-black" : "text-white"} overflow-hidden`} id='contact'>
         <div className=' h-full  lg:flex lg:flex-row py-20 lg:py-48  justify-center items-center px-5 lg:px-20 xl:px-40'>
            <Reveal>
               <div className=' hidden lg:block'>
                  <img src="/src/assets/contact.png" width={500} alt="" />
               </div>
            </Reveal>
            <div className={` flex-1 flex flex-col gap-y-5 p-5 shadow-lg rounded-xl ${theme === "light" ? "" : "shadow-gray-100/10"} `}>
               <form className='flex flex-col gap-y-7' id='contact' name='contact' autoComplete=''>
                  <Reveal>
                     <div className='heading flex gap-x-2 items-center'><AiOutlineMail />Get in Touch </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <input type="text" name="name" id="contact-name" placeholder='Full Name*' autoComplete='given-name' className={`w-full p-3 rounded-xl outline-0 font-semibold ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <input type="email" name="mail" id="contact-mail" placeholder='Email*' autoComplete='off' className={`w-full p-3 rounded-xl outline-0 font-semibold  ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <textarea role='4' name="msg" id="contact-msg" placeholder='Message*' autoComplete='hlo' className={`w-full resize-none outline-0 p-3 rounded-xl font-semibold h-40  ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <div className=' flex justify-end mt-5'>
                     <Reveal>
                        <Button name="Say Hi &#128075;" />
                     </Reveal>
                  </div>
               </form>
               <Reveal>
               <div className=' text-red-600'>
                  *Mails will not be received, its just a dummy, This feature will be added soon.. :)
               </div>
               </Reveal>
            </div>

         </div>
      </div>
   )
}

export default Contact