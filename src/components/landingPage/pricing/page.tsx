import React from 'react'
import PricingCard from './pricingCard'

export default function Pricing () {
  return (
    <>
    <div className="flex flex-col items-center bg-none mt-52 mb-12">
    <div className="mb-2 mt-12 text-center ">
      <h1 className="mb-4 text-4xl text-center text-secondary">Pricing</h1>
    </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center p-4">

    <div className="flex flex-col gap-8 p-10 md:flex-row ">
      <PricingCard color="#f06292" period="" name="Basic" desc="Suitable for personal use or to try takhteet" features={[
        '5 Folders', 'unlimited Workspaces', 'unlimited files per folder', 'Invite 10 collaborators'
      ]} />
    </div>

    <div className="flex flex-col gap-8 p-10 xl:flex-row">
      <PricingCard  color="#EC407A" name="Premium" desc="Suitable for planning and task management for personal use or for teams" period="/month" currency="AED" price="7.50" features={[
        'Unlimited Folders', 'Unlimited Workspaces', 'Unlimited Files per folder', 'Invite unlimited collaborators', 'Customize your workspace'
      ]} />
    </div>

    
    
    </div>
    </>
  )
}

