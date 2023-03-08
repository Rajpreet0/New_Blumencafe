"use client"
import React, {useState} from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import emailjs from 'emailjs-com'
import Dog from '../images/dog.png'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'

const Contact = () => {

   const [surname_k, setSurname_k] = useState('')
   const [lastname_k, setLastname_k] = useState('')
   const [email_k, setEmail_k] = useState('')
   const [telefon_k, setTelefon_k] = useState('')
   const [anliegen, setAnliegen] = useState('')

   function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_zps2th1',
        'template_nuhpyif',
        e.currentTarget,
        'zj8F7niepheGNfeNU',
      ).then(res => {
        toast.success(`Deine Email wurde an uns weitergeleitet. Wir werden uns melden!`);
        setSurname_k('');
        setLastname_k('');
        setEmail_k('');
        setTelefon_k('');
        setAnliegen('');
      }).catch(err => {
         toast.error(`Leider hat was nicht geklappt`)
         console.log(err);
      });
    }

  return (
  <>
   <ToastContainer/> 
    <div className='min-h-screen  pt-32  pb-32' id='kontakt' >
         <h1 className='text-center font-bold tracking-widest text-4xl font-lobster'>Kontaktieren Sie uns</h1>
         <div className='p-4 mt-8 bg-main flex w-full items-center justify-center'>
            <Image src={Dog} className="w-[50px] h-[50px]" alt=''/>
            <h2 className='text-center text-xl text-white md:ml-4'> Auch Hunde sind im Café herzlich willkommen.</h2>
          </div>
           <div className='flex p-4 w-full flex-col items-center justify-center md:flex-row'>
             
             {/* -------- RIGHT -------- */}
             
             <div className='mt-6 md:w-1/2 md:mt-24'>


                <form
                onSubmit={sendEmail}
                className='w-full max-w-lg'>
                  <div className='flex flex-wrap -mx-3 mb-4'>

                     <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                          Vorname
                        </label>
                        <input
                        name='surname'
                        required
                     
                        value={surname_k} onChange={(e) => setSurname_k(e.target.value)}
                        className='appearance-none block w-full shadow-inner focus:border-2 bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                        placeholder='Max'
                        />
                     </div>
                     <div className='w-full md:w-1/2 px-3'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                            Nachname
                        </label>
                        <input
                         name='lastname'
                         required
                        
                         value={lastname_k} onChange={(e) => setLastname_k(e.target.value)}
                         className='appearance-none block w-full shadow-inner focus:border-2 bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                         placeholder='Mustermann'
                        />
                     </div>

                     <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                          Email
                        </label>
                        <input
                        name='email'
                        required
                      
                        value={email_k} onChange={(e) => setEmail_k(e.target.value)}
                        className='appearance-none block w-full shadow-inner focus:border-2 bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                        placeholder='max.muster@gmail.com'
                        />
                     </div>
                     <div className='w-full md:w-1/2 px-3'>
                        <label className='block uppercase tracking-widest text-gray-700 text-xs font-bold mb-2'>
                            Telefon
                        </label>
                        <input
                         name='telefon'
                         required
                       
                         value={telefon_k} onChange={(e) => setTelefon_k(e.target.value)}
                         className='appearance-none block w-full shadow-inner focus:border-2 bg-white text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white transition-all'
                         placeholder='+49 123 4567'
                        />
                     </div>

                     <div className='w-full px-3 mt-4 mb-6 md:mb-0'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                           Nachricht
                        </label>
                        <textarea
                         name='message'
                        
                         value={anliegen} onChange={(e) => setAnliegen(e.target.value)}
                         required
                         placeholder="Deine Nachricht..." 
                         className='appearance-none block w-full h-full bg-white focus:border-2 text-gray-700 rounded py-5 px-4 leading-tight focus:outline-none focus:bg-white transition-all'
                        />
                     </div>

                     <div className='w-full px-3  mb-6 md:mb-0'>
                         <input type="submit" className="text-white text-xl mt-12 px-6 py-4 shadow-inner rounded-lg cursor-pointer bg-main" value="Abschicken"></input>
                     </div>

                  </div>
                </form>
             </div>
 
             {/* -------- LEFT -------- */}

             <div className='mt-6'>
                 <p className='text-lg'>Bahnhofstraße 37, <br/>48268 Greven, NRW</p>
                 <div className='flex flex-col mt-4 justify-around md:flex-row'>
                     <div className='flex '>
                       <EnvelopeIcon
                       className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='mailto:blumencafe.kontakt@gmail.com'>blumencafe.kontakt@gmail.com</a></p>
                     </div>
                     <div className='flex ml-5 mt-4 md:mt-0'>
                       <PhoneIcon
                        className='w-6 h-6 mr-2'/>
                        <p className='cursor-pointer hover:underline'><a href='tel:02572 9385979'>02572 9385979</a></p>
                     </div>
                 </div>
                 <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.7101838473845!2d7.5542898810068735!3d52.1304475681219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9c9c47d7e7667%3A0xff08d379b400dd78!2sDas%20Blumencaf%C3%A9%20-%20Mehr%20als%20Blumen!5e0!3m2!1sde!2sde!4v1659879821508!5m2!1sde!2sde" 
                 width="100%" height="450" loading="lazy" 
              className='rounded-lg border-4 mt-8 text-center border-main'></iframe>
              
             </div>

           </div>
    </div>
   </>
  )
}

export default Contact

