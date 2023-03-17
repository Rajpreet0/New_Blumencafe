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
