import { useState,useEffect } from "react";
import React from 'react'
import { GoChevronUp } from "react-icons/go";



const BackToTop = () => {
    const [scrollBtn,setScrollBtn]=useState(false)
    var tr ="translate-y-[98vh] xl:translate-y-[97vh] opacity-100"
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>300){
                setScrollBtn(true)
              }else{
                setScrollBtn(false)
              }  
        })
    }, [])
    
    
    const scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

  return (
    <div className={`fixed -top-10 cursor-pointer  right-5 xl:-top-10 xl:right-10 p-2 bg-accent2 shadow-xl rounded-full font-extrabold  text-xl  transition-all duration-500 ease-out ${scrollBtn===true ?   tr  : " opacity-0" }`} onClick={scrollTop}>
        <GoChevronUp />
    </div>
  )
}

export default BackToTop