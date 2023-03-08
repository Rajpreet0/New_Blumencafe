import Image from 'next/image'
import React from 'react'
import Jobs from '../images/jobs-background.jpg'

const Gallery: React.FC = () => {
  return (
<div className='h-5/6' id='gallery'>
    <h1 className='text-4xl text-center pt-20 font-lobster tracking-wider'>Gallerie</h1>
<section className="overflow-hidden text-neutral-700" >
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs}/>
        </div>
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs} />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Jobs} />
        </div>
      </div>
    </div>
  </div>
</section>

</div>

  )
}

export default Gallery