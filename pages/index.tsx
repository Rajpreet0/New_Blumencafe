import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import OpeningHours from '../components/OpeningHours'


/*  Things to ToDo:

  [] Cutting out the About Section
  [] Herzlich Willkommen im Blumencafe
  [] Selbstbedinung
  [] Coffee to go 
*/


const Home: NextPage = () => {
  return (
   <>
    <Head>
    <title>Blumencafe: Home</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='min-h-screen bg-[#ffe6cf]'>
      <Hero/>
      <About/>
      <OpeningHours/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
   </> 
  )
}

export default Home
