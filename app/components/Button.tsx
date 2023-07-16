"use client"

import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'


interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode | string | number
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <motion.button onClick={props.onClick} whileHover={{ filter: "brightness(0.89)" }} whileFocus={{ filter: "brightness(0.89)" }} className='mt-10 font-[500] text-xl bg-slate-200 px-16 py-4 rounded-2xl'>
        {props.children}
    </motion.button>
  )
}

export default Button