import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Kontakt = () => {
  return (
    <section id="kontakt" className='bg-cyan-900 w-full p-10 text-white responsive-kontakt flex flex-row-reverse'>
      <div className="map">
        <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92198.54236539437!2d19.30154815464059!3d42.06028588642501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e005bf998212f%3A0x7c0d3fbd64d1804e!2sShkod%C3%ABr%2C%20Albania!5e1!3m2!1sen!2s!4v1689514878187!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='flex justify-center flex-col w-full'>
        <h1 className='font-bold text-5xl'>
          Na Kontaktoni
        </h1>
        <p className='font-semibold text-3xl mt-14'>
          Nr. Telefoni: 00355692060022
          <br />
        </p>
        <div className='flex flex-row items-center font-semibold text-3xl'>
            Instagram: 
            <Link href="https://www.instagram.com/auto_gean" className='ml-5'>
              <Image src={"/instagram.svg.webp"} alt='instagram' width={50} height={50} />
            </Link>
          </div>
      </div>
    </section>
  )
}

export default Kontakt