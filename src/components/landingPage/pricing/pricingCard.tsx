import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import Link from '../../../../node_modules/next/link';

interface PricingCardProps {
    name: string;
    desc: string;
    price?: string;
    currency?: string;
    features: string[];
    period: string;
    color:string;
}

export default function PricingCard ({name, desc, price, features, color, currency, period}: PricingCardProps) {
  return <div style={{backgroundColor: color}} className="flex min-h-[550px]  w-[360px] flex-col rounded-3xl p-8">
      <h2 className="mb-5 text-xl font-medium text-white">{name}</h2>
      <div className="mb-5 flex items-end text-6xl text-white font-black">
          {price ? (
              <>
              <div className="flex inline-block"><p className="text-32">{currency }</p> {price}</div>
              <div className="text-sm">{period}</div>
              </>
          ): ('Free')}
      </div>
      <p className="mb-5 text-white">{desc}</p>
      <ul key="" className="mb-10 flex flex-col gap-y-2 text-white">
          {features.map((feature) => (
              <li key="" className="flex items-center gap-2">
                  <CheckCircle2/>
                  {feature}</li>
          ))}
      </ul>
      <Link href="/signup" className="mt-auto rounded-xl text-center bg-white py-3 text-black ">
      <button >Get Started</button>      
      </Link>

  </div>
}

