import React from 'react'
import webScreen from '../../../../public/takhteet.png'

import Image from '../../../../node_modules/next/image'
import Link from '../../../../node_modules/next/link'

export default function Hero () {
  
const HeroContent = {
  h1: "Plans, tasks, collaboration in one place",
  description: "You can collaborate with the team to manage tasks and projects in one place with just one click",
  heroImage: {
    alt: "Image",
    path: webScreen
  }
}
  return (
    <>
    <section className="w-full bg-white mt-16 lg:mt-20 xl:mt-24">
    <div className='mx-auto grid max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 py-8'>

      {/*Left*/}
      <div className="flex flex-col space-y-8 justify-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-black">
          {HeroContent.h1}
        </h1>
        <p className="text-lg max-w-lg text-secondary">{HeroContent.description}</p>
        <div >
          <Link href="/signup">
        <button  className="bg-secondary text-white px-4 py-4 rounded-lg transition ">Get Started</button>
          
          </Link>

        </div>
      </div>

      {/*Right*/}
      <div className=" relative mt-10  ">
        <Image className="h-full w-full bg-none p-1 rounded-xl" src={HeroContent.heroImage.path} alt=""  quality={100}   />
      </div>
      

    </div>    
    </section>

    <section>
      <div className="">

      </div>
    </section>
    </>

  )
}

