import React from 'react'

const FloatingDiv = ({image,classes}) => {
  return (
    <div className={`p-3 rounded-full ${classes}`}>
     <img src={image} alt="" />
    </div>
  )
}

export default FloatingDiv