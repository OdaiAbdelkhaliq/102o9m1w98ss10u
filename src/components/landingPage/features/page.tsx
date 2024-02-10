import React from 'react'
import Image from '../../../../node_modules/next/image'
import webScreen from '../../../../public/webprs.png'
import Collaboration from '../../video/collaborating.gif'
import folderName from '../../video/Updatefoldername.gif'
import folderIcon from '../../video/updatefoldericon.gif'
import workspaceLogo from '../../video/updatelogo.gif'
import customBanner from '../../video/updatebanner.gif'

export default function Features () {
  return (
    <section className="bg-none py-20 mt-20 lg:mt-60">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2 mb-12">
          <h1 className="text-4xl text-center text-secondary">Features</h1>
      </div>

      {/*Feature 1 Start*/}
      <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            
                  <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full p-1 rounded-xl bg-secondary" src={Collaboration} alt="/" width={280} height={250}/>
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h1 className="text-4xl text-secondary">Realtime Collaboration</h1>
                  <p className="text-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Takhteet allows you to collaborate in realtime with your team.
                  </p>
              </div>
          </div>

          <div className="
          hidden
          lg:block
          overflow-hidden
          bg-secondary
          rounded-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
          "></div>

      </div>
    {/*Feature 1 end*/}

          {/*Feature 2 Start*/}
          <div className="relative mt-20 lg:mt-52 ">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center -gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                  <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full p-1 mr-24 rounded-xl bg-secondary " src={folderName} alt="/" width={280} height={250} />
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h1 className="text-4xl text-secondary">Realtime Update</h1>
                  <p className="text-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Update and customize folders and files in realtime.
                  </p>
              </div>
          </div>

          <div className="
          hidden
          lg:block
          overflow-hidden
          bg-secondary
          rounded-l-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -right-0
          "></div>

      </div>
    {/*Feature 2 end*/}


      {/*Feature 3 Start*/}
      <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            
                  <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full p-1 rounded-xl bg-secondary" src={folderIcon} alt="/" width={280} height={250}/>
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h1 className="text-4xl text-secondary">Choose Custom Icons</h1>
                  <p className="text-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Choose your favorite emoji to be the icon for folders and files.
                  </p>
              </div>
          </div>

          <div className="
          hidden
          lg:block
          overflow-hidden
          bg-secondary
          rounded-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
          "></div>

      </div>
    {/*Feature 3 end*/}


          {/*Feature 4 Start*/}
          <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center -gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                  <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full p-1 mr-24 rounded-xl bg-secondary " src={workspaceLogo} alt="/" width={280} height={250} />
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h1 className="text-4xl text-secondary">Customize your workspace logo</h1>
                  <p className="text-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Customize your workspace & Choose your favorite logo for your workspace.
                  </p>
              </div>
          </div>

          <div className="
          hidden
          lg:block
          overflow-hidden
          bg-secondary
          rounded-l-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -right-0
          "></div>

      </div>
    {/*Feature 4 end*/}


      {/*Feature 5 Start*/}
      <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
              <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            
                  <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full p-1 rounded-xl bg-secondary" src={customBanner} alt="/" width={280} height={250}/>
              </div>
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h1 className="text-4xl text-secondary">Add your favorite banner</h1>
                  <p className="text-gray my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                  Customize your workspace by choosing a banner for your workspaces, folders, and files.

                  </p>
              </div>
          </div>

          <div className="
          hidden
          lg:block
          overflow-hidden
          bg-secondary
          rounded-full
          absolute
          h-80
          w-2/4
          -bottom-24
          -left-36
          "></div>

      </div>
    {/*Feature 5 end*/}


    </section>
  )
}

