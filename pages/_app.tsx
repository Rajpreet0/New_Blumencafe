import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return ( <>
    
   <Script 
   strategy='lazyOnload'
   src={`https://www.googletagmanager.com/gtag/js?id=G-RJH84F2XC7`}/>

   <Script strategy='lazyOnload'>
     {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-RJH84F2XC7');
     `}
   </Script>


    <Component {...pageProps} />
 
  </>
  )
}

export default MyApp
