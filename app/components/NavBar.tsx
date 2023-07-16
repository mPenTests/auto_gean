"use client"

import React from 'react'
import Link from 'next/link'


const NavBar = () => { 
  return (
    <nav className="w-full flex flex-row text-2xl justify-center gap-14 md:px-16 responsive-navbar py-5">
      <button onClick={() => {
        document.querySelector("#home")?.scrollIntoView({behavior: "smooth"})
      }} className='text-gray-500 underline-fill-effect hover:text-cyan-800  font-semibold'>
        Home
      </button>
      <button onClick={() => {
        document.querySelector("#rreth-nesh")?.scrollIntoView({behavior: "smooth"})
      }} className='text-gray-500 underline-fill-effect hover:text-cyan-800  font-semibold'>
        Rreth Nesh
      </button>
      <button onClick={() => {
        document.querySelector("#makinat")?.scrollIntoView({behavior: "smooth"})
      }} className='text-gray-500 underline-fill-effect hover:text-cyan-800  font-semibold'>
        Mjetet
      </button>
      <button onClick={() => {
        document.querySelector("#kontakt")?.scrollIntoView({behavior: "smooth"})
      }} className='text-gray-500 underline-fill-effect hover:text-cyan-800  font-semibold'>
        Na Kontaktoni
      </button>
    </nav>
  )
}

export default NavBar