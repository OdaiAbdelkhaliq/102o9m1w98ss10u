import React from 'react'
import { ChevronDown } from 'lucide-react';

export default function FAQ () {
  return (
      <section className="bg-none py-20">
          <div className="container">
              {/*Heading*/}
              <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                  <h1 className="text-4xl text-center text-secondary">FAQ</h1>
                  <p className="text-center text-gray mt-4">
                  I am the description of features, please edit me and add the correct description

                  </p>
              </div>
            
            {/*Items*/}

            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto ">
                <div className="flex flex-col items-center ">
                    
                    <div className="flex items-center border-b py-4 w-full">
                        <span className="flex-1 ">Question 1 ?</span>
                        <ChevronDown />
                    </div>

                    <div className="flex items-center border-b py-4 w-full">
                        <span className="flex-1 ">Question 1 ?</span>
                        <ChevronDown />
                    </div>


                    <div className="flex items-center border-b py-4 w-full">
                        <span className="flex-1 ">Question 1 ?</span>
                        <ChevronDown />
                    </div>


                    <div className="flex items-center border-b py-4 w-full">
                        <span className="flex-1 ">Question 1 ?</span>
                        <ChevronDown />
                    </div>


                </div>
            </div>


          </div>

      </section>
  )
}


