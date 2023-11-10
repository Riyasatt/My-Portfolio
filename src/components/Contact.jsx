import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context'
import { AiOutlineMail } from "react-icons/ai"
import Reveal from "./Reveal"
import contactimg from "/src/assets/contact.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
   const { theme } = useContext(ThemeContext)
   const form  = useRef()
   
   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qe9ohle', 'template_xkb4gko', form.current, 'tIaC29zRC3QB1cqC-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   

   return (
      <div className={` min-h-screen ${theme === "light" ? "text-black" : "text-white"} overflow-hidden`} id='contact'>
         <div className=' h-full  lg:flex lg:flex-row py-20 lg:py-48  justify-center items-center px-5 lg:px-20 xl:px-40'>
            <Reveal>
               <div className=' hidden lg:block'>
                  <img src={contactimg} width={500} alt="" />
               </div>
            </Reveal>
            <div className={` flex-1 flex flex-col gap-y-5 p-5 shadow-lg rounded-xl ${theme === "light" ? "" : "shadow-gray-100/10"} `}>
               <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-7' id='contact' name='contact' autoComplete=''>
                  <Reveal>
                     <div className='heading flex gap-x-2 items-center'><AiOutlineMail />Get in Touch </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <input type="text" name="from_name" id="from_name" placeholder='Full Name*' autoComplete='given-name' className={`w-full p-3 rounded-xl outline-0 font-semibold ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <input type="email" name="user_email" id="user_email" placeholder='Email*' autoComplete='off' className={`w-full p-3 rounded-xl outline-0 font-semibold  ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <Reveal>
                     <div>
                        <textarea role='4' name="message" id="message" placeholder='Message*' autoComplete='hlo' className={`w-full resize-none outline-0 p-3 rounded-xl font-semibold h-40  ${theme === "light" ? "bg-gray-100" : "bg-gray-800/40"}`} />
                     </div>
                  </Reveal>
                  <div className=' flex justify-end mt-5'>
                     <Reveal>
                        <button type='submit' className={` cursor-pointer py-2 w-[150px] text-center border-b-4 border-b-accent2 transition-all duration-300 rounded-lg bg-accent text-white  font-semibold text-lg`}>Say Hi &#128075; </button>
                     </Reveal>
                  </div>
               </form>
            </div>

         </div>
      </div>
   )
}

export default Contact