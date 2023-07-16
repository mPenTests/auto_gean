import React from 'react'
import Card from './Card'
import Button from './Button'
import Link from 'next/link'


const Makinat = () => {
  return (
    <section id="makinat" className='flex flex-col w-full gap-5 bg-cyan-600 items-center justify-center p-14'>
      <div className='flex cars flex-row gap-5'>
      <Card title='Mercedes Benz E-Class Model 212' photo='/eclass.jpeg' 
      description='Amg edition fabrike i bere me porosi motorr 220 /9G nafte me'
      link='https://www.instagram.com/p/CsjeD9Ato2r/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' />
      <Card title='Range Rover' photo='/range.jpeg' 
      description='Range Rover është një SUV luksoz 4x4 i prodhuar nga Land Rover, një markë dhe nën-markë e Jaguar Land Rover.'
      link='https://www.instagram.com/p/CY84-zgtYiI/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' />
      <Card title='Mercedes Benz S-Class' photo='/sclass.jpg' 
      description='Mercedes-Benz S-Class, i njohur më parë si Sonderklasse (gjermanisht për "klasa speciale", shkurtuar si "S-Klasse")'
      link='https://www.instagram.com/p/CUQU-Gzo28k/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' />  
      </div>
      <Link href={"https://www.instagram.com/auto_gean"}>
        <Button>
          Shih Mjetet Tona
        </Button>
      </Link>
    </section>
  )
}

export default Makinat