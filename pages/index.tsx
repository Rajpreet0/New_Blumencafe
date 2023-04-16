import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import { ClockIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header'
import {groq} from 'next-sanity';
import { client } from '../lib/sanity.client';

interface Props{
  times: Times[];
  info: Info[];
}


 function Home({times,info}: Props) {
   

  return (  
   <>
    <Head>
    <title>Blumencafe Greven | Hompage des Cafés in Greven-Reckenfeld</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="icon" href="/favicon.ico" />
    <link rel='canonical' href='https://blumencafe-greven.de'/>
    <meta name='Author' content='Bettina Thünemann'/>
    <meta
      name="description"
      content='Entdecken Sie das beste Café Grevens! Wir bieten Ihnen eine entspannte Atmosphäre, köstlichen Kaffee und eine Auswahl an haugemachten Snacks und Gebäck'
      key="desc"/>
        <meta name="revisit-after" content='5 days'/>
        <meta name='keywords' content='blumencafe, Bettina Thünemann, Café, Stadt Greven, greven, reckenfeld, cafe chocolate, cafe black, zucker mit kaffee, im cafe, apfelkuchen, käsekuchen, zitronenkuchen, schokokuchen, parkplätze'/>
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta itemProp='isFamilyFriendly' content='True'></meta>
    </Head>
    <Header/>
    <div className='min-h-screen bg-[#ffe6cf]'>
      <Hero/>
      <About/>
      <div className='h-fit' id='opening'>
    <h1 className='text-center text-4xl pt-20 font-lobster tracking-wider'>Unsere Öffnungszeiten</h1>
    <div className='flex flex-col w-full p-4 items-center justify-center md:mt-[5%] md:flex-row'>
        <div className='border-2 w-full m-[5%] p-4 border-bg bg-bg rounded-lg'>
            <div className='flex'>
                <ClockIcon className='w-6 h-6 mt-[3px] text-white'/>
                <h1 className='text-white text-2xl font-lobster pl-4'>Öffnungszeiten</h1>
            </div>
            <hr className='w-full text-white mt-2'/>
            <div className='mt-4 grid grid-cols-3 gap-4'>
          {times.map((time) => (
          <ul key={time._id}  className='text-white  text-lg'>
              <li ><span className='underline'>{time.title}</span>   {time.time}</li>
          </ul>
          ))}
      </div>
        <div className='mt-2 p-2'>
            <p className='text-white text-xl font-bold'>Wichtige Infos:</p>
            <hr className='w-full text-white mt-2'/>
            {info.map((infos) => (
              <div key={infos._id} className='p-2'>
                <p className='text-xl text-white'>{infos.info}</p>
              </div>
            ))}
        </div>
        </div>
    </div>
    </div>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
   </> 
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `  *[_type == "times"]  | order(publishedAt asc){
    _id,
    title,
    time,
  }`

  const queryInfo = `*[_type == "info"]{
    _id,
    info,
  }`

 const times = await client.fetch(query);
 const info  = await client.fetch(queryInfo);

 return  {
   props: {
    times,
    info,
   }
 }

}
