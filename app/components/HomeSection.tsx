"use client"

import React from 'react'
import { motion } from 'framer-motion'


const HomeSection = () => {
  return (
    <motion.section initial={{ opacity: 0, x: -100 }} animate={{opacity: 1, x: 0}} id="home" transition={{type: "spring", stiffness: 100, damping: 7}} className="mt-44 flex flex-col items-center w-full">
        <h1 className='text-6xl bg-gradient-to-r from-cyan-800 bg-clip-text text-transparent to-blue-950 font-extrabold'>
          Auto Gean 
        </h1>
        <p className='font-semibold text-center text-4xl mt-5'>
          Vendi me i mire per makina te importuara nga
          <br />
        </p>
        <span className='text-4xl'>
          <div className='w-full h-4'></div>
          🇩🇪 🇫🇷 🇧🇪 🇨🇭 🇩🇰 🇳🇱
        </span>
        <button onClick={() => {
          document.querySelector("#makinat")?.scrollIntoView({behavior: "smooth"})
        }} className='mt-36 h-14 w-7 border-4 flex items-center justify-center border-slate-700 rounded-2xl'>
          <motion.div animate={{y: [-10, 10, -10]}} transition={{repeat: Infinity, repeatType: "loop", repeatDelay: 0.3}} className='h-3 w-3 rounded-full bg-slate-700'>
    
          </motion.div>
        </button>
    </motion.section>
  )
}

export default HomeSection