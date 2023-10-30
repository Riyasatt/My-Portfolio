import React, {useRef,useEffect} from 'react'
import { motion,useInView,useAnimation,easeInOut } from 'framer-motion'

const Reveal = ({children}) => {
     const ref =useRef(null)
     const isInView =useInView(ref)
     const control=useAnimation()

     useEffect(() => {
       if(isInView){
          control.start("visible")
       }else{
        control.start("hidden")
       }
     }, [isInView])
     


  return (
    <div ref={ref}>
     <motion.div
          variants={{
               hidden:{opacity:0,y:50},
               visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={control}
          transition={{duration:0.5,easeInOut}}
     >
     {children}
     </motion.div>
    </div>
  )
}

export default Reveal