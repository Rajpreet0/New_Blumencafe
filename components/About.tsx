import Image from 'next/image'
import React from 'react'
import Coffee from '../images/icons/coffee.png';
import SelfService from '../images/icons/self-service.png';
import Baker from '../images/icons/baker.png';


const About: React.FC = () => {
  return (
    <div className='h-fit pb-32 pt-32 font-merri' >
       <div className='flex flex-col  w-full h-[50%] justify-around items-center p-4 md:flex-row'>
          <div className='information-cards'>
            <Image src={Coffee} alt="" className='w-24 h-24'/>
            <h2 className='mt-4 text-2xl'>Coffee To Go</h2>
            <p className='mt-2 p-1 text-[#979797]'>Der perfekte Begleiter für unterwegs. Egal ob auf dem Weg zur Arbeit, in der Mittagspause oder auf einer Reise - ein frischer Kaffee darf nicht fehlen. </p>
          </div>
          <div className='information-cards'>
            <Image src={SelfService} alt="" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Selbstbedienung</h2>
            <p className='mt-2 p-1 text-[#979797]'>Entdecke die Freiheit der Selbstbedienung! Kein Warten in Schlangen oder umständliches Bestellen - mit Selbstbedienung bist du dein eigener Herr.</p>
          </div>
          <div className='information-cards'>
            <Image src={Baker} alt="" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Frisch zubereitet</h2>
            <p className='mt-2 p-1 text-[#979797]'>Kuchen, die begeistern!  Jeder Kuchen wird von Hand mit viel Liebe und Sorgfalt zubereitet, um dir ein einzigartiges Geschmackserlebnis zu garantieren.</p>
          </div>
       </div>
    </div>
  )
}

export default About