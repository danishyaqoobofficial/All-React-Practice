import React from 'react'
import { NavLink } from 'react-router-dom'


const SidBar = (props) => {
  return (
      <NavLink to= {props.link} className={({ isActive }) => `w-full text-[14px] cursor-pointer px-[22px] py-[11px] rounded-[5px] transition-all ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'}`}>{props.user}</NavLink>
  )
}

export default SidBar