"use client"

import React from 'react'
import { motion } from 'framer-motion'


const RrethNesh = () => {
  return (
    <motion.section viewport={{once: true}} initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{type: "spring", stiffness: 100, damping: 7}} id="rreth-nesh" className='w-full flex flex-col responsive-rreth-nesh justify-center mb-36 items-center mt-36'>
      <h1 className='font-extrabold text-6xl bg-gradient-to-r from-cyan-800 bg-clip-text text-transparent to-blue-950'>
        Rreth Nesh
      </h1>
      <p className='text-4xl w-[800px] text-center font-semibold mt-5'>
        Qe nga viti 2012 kemi sjelle mjetet me te mira te importuara nga 🇪🇺 tek ju.
      </p>
      <motion.button onClick={() => {
        document.querySelector("#kontakt")?.scrollIntoView({behavior: "smooth"})}
        } whileHover={{ filter: "brightness(0.89)" }} className='mt-20 font-[500] text-xl bg-slate-200 px-16 py-4 rounded-2xl'>
        Me Poshte
      </motion.button>
    </motion.section>
  )
}

export default RrethNesh