import React from 'react'
import Image from '../../../../node_modules/next/image'
import Logo from "../../../../public/Logo36x51.png"

const Footer = () => {
  return (
<div className=" mx-auto w-full">

<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
  <div className="sm:flex sm:items-center sm:justify-between">
    <a href="" target="_blank" className="flex items-center mb-4 sm:mb-0">
      <Image src={Logo} alt="Flowbite Logo" />
      <span className="self-end text-xl font-regular whitespace-nowrap ml-2 text-secondary">Takhteet</span>
    </a>
    <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
      {/* <li>
        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
      </li> */}
      {/* <li>
        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
          Policy</a>
      </li> */}
      <li>
        <a href="https://www.iubenda.com/privacy-policy/22547514"
          className="mr-4 text-sm text-gray-500 hover:text-secondary">Privacy Policy</a>
      </li>
      <li>
        <a href="mailto:support@takhteet.online" className="text-sm text-gray-500 hover:text-secondary">Support</a>
      </li>
    </ul>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a className="hover:text-secondary">Takhteet</a>. All Rights Reserved.
  </span>
</footer>


</div>
  )
}

export default Footer
