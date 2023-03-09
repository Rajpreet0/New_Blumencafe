"use client"
import { XMarkIcon, Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import {Link as ScrollLink} from 'react-scroll'
import { Slide } from "react-awesome-reveal";
import { useState } from "react"
import Logo from '../images/logo.png'

function Header() {

    const [toggle, setToggle] = useState(false);


    const toggleModal = () => {
        setToggle(!toggle);
    }



  return (
    <div className="font-merri">
       
        <nav className="fixed w-full  z-50 bg-bg">
            
            <div className="flex items-center p-2 justify-between">
                <div className="p-4 cursor-pointer">
    	            <a href="/">
                        <Image
                           src={Logo}
                           alt=""
                           className="h-[70px] w-[110px] md:h-[90px] md:w-[160px]"/>
                    </a>    
                </div>
                <Slide>
                <div className="hidden md:flex items-center space-x-5 text-xl lg:space-x-14 text-white">
                    <ScrollLink activeClass="active" to="about" smooth="true" className="header-element">
                        Über uns
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="opening" smooth="true" className="header-element">
                        Öffnungszeiten
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="gallery" smooth="true" className="header-element">
                    Gallerie
                    </ScrollLink>
                <div className='hidden md:block p-3 px-6 pt-2 text-lg '>
                    <ScrollLink activeClass="active" to="kontakt" smooth="true">
                        <button
                        className='px-8 py-2 color-black rounded-full tracking-widest hover:scale-110 transition-all drop-shadow-md bg-main'>
                         Kontakt
                        </button>
                    </ScrollLink>  
                 </div> 
                </div>
    
            </Slide>

            {/* Mobile Menu */}
            {toggle && (
            
                   <XMarkIcon
                     onClick={toggleModal}
                     className='block h-6 w-6 cursor-pointer text-main_text md:hidden'/>
              )}
              {!toggle && (
                     <Bars3BottomRightIcon
                       onClick={toggleModal}
                       className='block h-6 w-6 cursor-pointer text-main_text md:hidden'/>
              )}        
            </div>
          
            
        {
          toggle && (
            <div>
               <div className='absolute flex flex-col items-center 
              h-fit space-y-4 w-full text-xl  sm:w-auto 
              sm:self-center   drop-shadow-xl transition-all text-main_text bg-bg'>
                    
                    <ScrollLink activeClass="active" to="about" smooth="true" onClick={() => toggleModal()} className="header-element">
                        Über uns
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="opening" smooth="true"  onClick={() => toggleModal()} className="header-element">
                        Öffnungszeiten
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="gallery" smooth="true" onClick={() => toggleModal()} className="header-element">
                        Gallerie
                    </ScrollLink>
                <div className='block p-3 px-6 pt-2 cursor-pointer text-white'>
                <ScrollLink activeClass="active" to="kontakt" onClick={() => toggleModal()} smooth="true">
                        <button
                        className='px-8 py-2 color-black rounded-full tracking-widest hover:scale-110 transition-all drop-shadow-md bg-main'>
                          Kontakt
                        </button>
                    </ScrollLink> 
                </div>
              
               </div>
            </div>
          )
        }

        </nav>
    </div>
  )
}

export default Header