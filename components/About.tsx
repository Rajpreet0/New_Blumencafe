import Image from 'next/image'
import React from 'react'
import Coffee from '../images/icons/coffee.png';
import SelfService from '../images/icons/self-service.png';
import Baker from '../images/icons/baker.png';
import Alcohol from '../images/icons/alcohol.png';
import Bier from '../images/icons/bier.png';
import Wine from '../images/icons/wine.png';
import Events from '../images/icons/party.png';
import {Link as ScrollLink} from 'react-scroll'

const About: React.FC = () => {
  return (
    <div className='h-fit pb-32 pt-32 font-merri' >
       <div className='flex flex-col  w-full h-[50%] justify-around items-center p-4 md:flex-row'>
          <div className='information-cards'>
            <Image src={Coffee} alt="Coffee To Go vom Blumencafe" className='w-24 h-24'/>
            <h2 className='mt-4 text-2xl'>Coffee To Go</h2>
            <p className='mt-2 p-1 text-[#979797]'>Der perfekte Begleiter für unterwegs. Egal ob auf dem Weg zur Arbeit, in der Mittagspause oder auf einer Reise - ein frischer Kaffee darf nicht fehlen. </p>
          </div>
          <div className='information-cards'>
            <Image src={SelfService} alt="Selbstbedienung an der Blumencafe Theke" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Selbstbedienung</h2>
            <p className='mt-2 p-1 text-[#979797]'>Entdecke die Freiheit der Selbstbedienung! Kein Warten in Schlangen oder umständliches Bestellen - mit Selbstbedienung bist du dein eigener Herr.</p>
          </div>
          <div className='information-cards'>
            <Image src={Baker} alt="Kuchen, Torten im Blumencafe" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Frisch zubereitet</h2>
            <p className='mt-2 p-1 text-[#979797]'>Kuchen, die begeistern!  Jeder Kuchen wird von Hand mit viel Liebe und Sorgfalt zubereitet, um dir ein einzigartiges Geschmackserlebnis zu garantieren.</p>
          </div>
       </div>
       <div className='flex flex-col  w-full h-[50%] justify-around items-center p-4 md:flex-row'>
          <div className='information-cards'>
            <Image src={Wine} alt="Frischer Wein im Blumencafe Greven" className='w-24 h-24'/>
            <h2 className='mt-4 text-2xl'>Unsere Weine</h2>
            <p className='mt-2 p-1 text-[#979797]'>Unser Wein ist mehr als nur ein Getränk. Er ist eine Erfahrung, die Sie mit Freunden und Familie teilen können. Probieren Sie unsere feinen Weine und genießen Sie den Geschmack.</p>
          </div>
          <div className='information-cards'>
            <Image src={Bier} alt="Frisch Gezapftes Bier im Blumencafe" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Unser Bier</h2>
            <p className='mt-2 p-1 text-[#979797]'>Tauchen Sie ein in die Welt des Bieres mit unserem exquisiten Angebot. Mit seinem erfrischenden Geschmack und seiner perfekten Textur ist unser Bier die perfekte Wahl für jede Gelegenheit.</p>
          </div>
          <div className='information-cards'>
            <Image src={Alcohol} alt="Hochprozentigen Alkohol wie Liköre oder auch Whiskey" className='w-24 h-24'/>  
            <h2 className='mt-4 text-2xl'>Hochprozentigen</h2>
            <p className='mt-2 p-1 text-[#979797]'>Genießen Sie das Leben mit einem Schluck unseres exquisiten Whiskeys oder Likörs. Entdecken Sie den Geschmack der Leidenschaft und des Luxus und lassen Sie sich von der Qualität und dem Aroma verführen.</p>
          </div>
       </div>
       <div className='flex flex-col  w-full h-[50%] justify-around items-center p-4 md:flex-row'>
        <div className='information-cards md:w-[40%]'>
          <Image src={Events} alt="Vermietbare Räumlichkeiten im Blumencafe zweiter Stock " className='w-24 h-24'/>
          <h2 className='mt-4 text-2xl'>Räumlichkeiten</h2>
          <p className='mt-2 p-1 text-[#979797]'>Unsere helles Café Räumlichkeiten sind ideal für Seminare, Coaching, Vereinstreffen und andere geschäftliche Veranstaltungen. Ausgestattet mit  Platz für Gruppen, bieten sie eine ruhige und produktive Umgebung für Ihre Teilnehmer. Auch außerhalb der Öffnungszeiten möglich!</p>
          <ScrollLink activeClass="active" to="kontakt" smooth="true">
            <button className='p-3 bg-bg text-center pr-8 pl-8 rounded-md text-white drop-shadow-md hover:scale-105 transition-all'>Kontakt</button>
          </ScrollLink>
        </div>     
       </div>
    </div>
  )
}

export default About