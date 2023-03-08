import React from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

function OpeningHours() {
  return (
    <div className='h-fit' id='opening'>
        <h1 className='text-center text-4xl pt-20 font-lobster tracking-wider'>Unsere Öffnungszeiten</h1>
        <div className='flex flex-col w-full p-4 items-center justify-center md:mt-[5%] md:flex-row'>
            <div className='border-2 w-full m-[5%] p-4 border-bg bg-bg rounded-lg'>
                <div className='flex'>
                    <ClockIcon className='w-6 h-6 mt-[3px] text-white'/>
                    <h1 className='text-white text-2xl font-lobster pl-4'>Öffnungszeiten</h1>
                </div>
                <hr className='w-full text-white mt-2'/>
               <ul className='text-white mt-4 grid grid-cols-3 gap-4 text-lg'>
                    <li ><span className='underline'>Montag:</span>   Ruhetag</li>
                    <li><span className='underline'>Dienstag:</span> Ruhetag</li>
                    <li><span className='underline'>Mittwoch:</span> 12:00-18:00 Uhr</li>
                    <li><span className='underline'>Donnerstag:</span> 12:00-18:00 Uhr</li>
                    <li><span className='underline'>Freitag:</span> 12:00-18:00 Uhr</li>
                    <li><span className='underline'>Samstag:</span> 12:00-18:00 Uhr</li>
                    <li><span className='underline'>Sonntag:</span> 12:00-18:00 Uhr</li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default OpeningHours