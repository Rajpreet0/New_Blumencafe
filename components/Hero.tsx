"use client";
import Image from 'next/image'
import React from 'react'
import {Link as ScrollLink} from 'react-scroll'
import { Fade } from "react-awesome-reveal";
import BackgroundImage from '../images/background-image.jpg'

const Hero: React.FC = () => {
  return (
    <div className="hero_container" id="home">
      <div className='hero_bg'>
        <Image alt='' src={BackgroundImage} layout='fill' className='object-center'/>
      </div>
      <div className='hero_content'>
       <Fade> 
        <div className='flex flex-col items-center justify-center h-screen text-white'> 
            <h1 className='text-[30px] text-center tracking-widest font-dancing md:text-[55px]'>Willkommen im</h1>
            <h1 className='text-[60px] text-center tracking-wides font-dancing md:text-[85px]'>Blumencafe</h1>
        </div>
       </Fade>
      </div>
    </div>
  )
}

export default Hero
