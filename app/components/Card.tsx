"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from './Button'


interface CardProps {
    photo: string,
    title: string,
    description: string,
    link: string
}

const Card = (props: CardProps) => {
  return (
    <motion.div whileHover={{scale: 1.05}} className="p-10 bg-white w-[400px] responsive-card rounded-2xl">
        <div className="image flex justify-center">
            <Image src={props.photo} className='rounded-2xl' alt='E-Class' width={350} height={200} />
        </div>
        <h1 className='mt-7 text-2xl font-semibold'>
            {props.title}
        </h1>
        <p className='w-[350px] truncate text-xl'>
            {props.description}
        </p>
        <Link className='flex justify-center items-center' href={props.link}>
            <Button onClick={() => document.querySelector("#makinat")?.scrollIntoView({behavior: "smooth"})}>
                Shiko Me Shume
            </Button>
        </Link>
    </motion.div>
  )
}

export default Card