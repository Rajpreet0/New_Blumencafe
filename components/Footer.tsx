"use client"
import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import Logo from '../images/logo.png';
import Instagram from '../images/instagram.png';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Link as ScrollLink} from 'react-scroll'
import Image from 'next/image';

function Footer() {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

  return (
    <div className='bg-bg font-merri'>
         <footer className='p-4 sm:p-6 '>
           <div className='md:flex md:justify-between'>
              <div className='flex mb-6 md:mb-0'>
                
              <div className='p-2 mt-8 mr-4 md:mt-0 md:mr-0'>
                 <ArrowUpIcon className='w-7 h-7 cursor-pointer text-main' onClick={() => scrollToTop()}/>
                </div>

         
                <Link href='/' className='flex  items-center'>
                      <Image
                      alt=''
                      src={Logo}
                      height={80}
                      width={160}
                      className='mr-3 '/>
                </Link>
              
              </div>
              <div className='grid gird-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>

               
                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold  uppercase text-center text-main' >Sitemap</h2>
                    <ul className='text-main_text text-center'>
                        <li className='mb-4'>
                            <ScrollLink activeClass="active" to="home" smooth="true" className='link-footers'>Home</ScrollLink>
                        </li>
                        <li className='mb-4'>
                            <ScrollLink href='/'  activeClass="active" to="about" smooth="true" className='link-footers'>Über uns</ScrollLink>
                        </li>
                        <li className='mb-4'>
                            <ScrollLink href='/' to='opening'  activeClass="active"   smooth="true" className='link-footers'>Öffnungszeiten</ScrollLink>
                        </li>
                        <li className='mb-4'>
                            <ScrollLink href='/'  activeClass="active" to="gallery" smooth="true" className='link-footers'>Gallerie</ScrollLink>
                        </li>
                        <li className='mb-4'>
                            <Link href='/'  className='link-footers'>Kontakt</Link>
                        </li>
                    </ul>
                 </div>
               
                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold  uppercase text-center text-main'>Andere Links</h2>
                    <ul className='text-main_text text-center '>
                        <li className='mb-4'>
                            <Link href='/impressum' className='link-footers'>Impressum</Link>
                        </li>
                        <li className='mb-4'>
                            <Link href='/datenschutz' className='link-footers'>Datenschutz</Link>
                        </li>
                    </ul>
                 </div>

                 <div>
                    <h2 className='mb-6 text-md tracking-wider font-semibold text-main uppercase text-center'>Kontakt Info</h2>
                    <ul className='text-main_text text-center '>
                        <li className='mb-4'>
                            <a href='mailto:blumencafe.kontakt@gmail.com' className='link-footers'>Email</a>
                        </li>
                        <li className='mb-4'>
                            <a href='tel:02572 9385979'className='link-footers'>Anruf</a>
                        </li>
                    </ul>
                 </div>

               

              </div>
        
           </div>
           <hr className='my-6 border-white sm:mx-auto lg:my-8'></hr>
           <div className='sm:flex sm:items-center sm:justify-between'>
             <span className='text-sm text-main_text sm:text-center'>© 2023 Das Blumencafe. Erstellt von <a href="https://honet.page" className='font-bold link-footers'>Honet</a></span>
            <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
                <a href='https://www.instagram.com/blumencafe.greven/?hl=de' className=' hover:scale-105 transition-all'>
                  <Image
                    src={Instagram}
                    alt=""
                  />
                </a>
             </div>
              </div>
        </footer>
    </div>
  )
}

export default Footer