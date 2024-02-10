import React from 'react'
import Image from '../../../../node_modules/next/image'
import Logo from "../../../../public/Logo36x51.png"
// import { Menu } from 'lucide-react';
import Link from '../../../../node_modules/next/link';

export default function Navbar () {

  const header = {
    logo: {
      title: "Logo",
      path: Logo
    },
    menu: [
      {
        "title": "",
        "href": "/"
      },
      {
        "title": "",
        "href": "/"
      },

    ]
  }

  return (
    <header className="w-full bg-white py-6">
      <nav className="max-w-7xl mx-auto px-8 flex flex-row justify-between items-center">

        <div className="flex inline-block">
          <Image src={header?.logo?.path} width={36} height={51} alt=""/>
          <p className="self-end text-xl text-secondary ml-2 flex inline-block ">Takhteet</p>
          


        </div>

        <ul className="space-x-8 hidden flex-row lg:flex items-center">
          {header.menu && header.menu.map((item, i) => (
            <li className="cursor-pointer transition hover:text-pink-700" key={i}>{item?.title}</li>
          ))}
        </ul>

        <div >
          <div className="hidden md:flex flex-row space-x-4">

          <Link href="/login">
          <button className="px-8 py-4 rounded-lg transition bg-secondary text-white hover:bg-pink-700" >Login</button>
          </Link>

          </div>
          {/* <div className="md:hidden">
            <Menu/>
          </div> */}
        </div>
      </nav>
    </header>
  )
}

