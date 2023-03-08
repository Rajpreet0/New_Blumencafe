import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Logo from '../images/logo.png';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-bg'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='absolute inset-0 p-2'>
           <Link href='/'><Image src={Logo} alt="" height={90} width={160}/></Link>
        </div>
        <h1 className='text-8xl font-bold tracking-widest text-white' >404</h1>
        <h2 className='uppercase tracking-wider text-lg text-white' >- Seite nicht gefunden -</h2>
      </div>
    </div>
  )
}

export default NotFound