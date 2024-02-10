import FAQ from '@/components/landingPage/faq/page'
import Features from '@/components/landingPage/features/page'
import Footer from '@/components/landingPage/footer/page'
import Hero from '@/components/landingPage/hero/page'
import Navbar from '@/components/landingPage/navbar/page'
import Pricing from '@/components/landingPage/pricing/page'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar/>

      <main className='flex flex-col'>
      <Hero />
      <Features/>
      {/* <FAQ/> */}
      <Pricing/>
      </main>
      <Footer/>
      

    </div>
  )
}

export default page
