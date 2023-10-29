import React from 'react'

const Button = ({name,handleClick,classes}) => {
  return (
    <div className={` cursor-pointer py-2 w-[150px] text-center border-b-4 border-b-accent2 transition-all duration-300 rounded-lg bg-accent text-white  font-semibold text-lg ${classes}`} onClick={handleClick}>{name}</div>
  )
}

export default Button