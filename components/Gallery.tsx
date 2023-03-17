import Image from 'next/image'
import React from 'react'
import One from '../images/jobs-background.jpg'
import Two from '../images/gallerie_one.jpg'
import Third from '../images/gallerie_two.jpg'
import Four from '../images/gallerie_three.jpg'
import Five from '../images/gallerie_four.jpg'
import Six from '../images/gallerie_five.jpg'
import Seven from '../images/gallerie_six.jpeg'

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
            src={One} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Seven}/>
        </div>
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Two} />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Four} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Five} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Six} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={Third} />
        </div>
      </div>
    </div>
  </div>
</section>

</div>

  )
}

export default Gallery