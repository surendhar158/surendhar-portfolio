import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
  const [tonglemenu, settonglemenu] = useState(false)
  return <nav className="flex justify-between fixed w-full font-serif px-5 py-5 bg-indigo-900">
    <a className="text-3xl font-HERO text-red-500" href="#hero">PORTFOLIO</a>
    <nav className="hidden md:block font-bold">
      <ul onClick={() => settonglemenu(!tonglemenu)} className="flex space-x-5 text-xl text-white ">
        <li className="hover:text-black "><a href="#hero">Home  </a></li>
        <li className="hover:text-black"><a href="#about">About </a></li>
        <li className="hover:text-black"><a href="#project">Project </a></li>
        <li className="hover:text-black"><a href="#resume">Resume</a></li>
        <li className="hover:text-black"><a href="#contact">contact</a></li>
      </ul>
    </nav>
    {
    tonglemenu && (
        <nav className="md:hidden mt-2">
   <ul className="fixed top-20 right-0 w-40 flex flex-col gap-4 items-center 
  text-white bg-white/10 backdrop-blur-md 
  border-t border-white/20 shadow-xl rounded-2xl
  py-6 px-4 transition-all duration-300 z-40 ">

            <li onClick={() => settonglemenu(false)}><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li onClick={() =>  settonglemenu(false)}><a href="#about" className="hover:text-blue-400">About</a></li>
            <li onClick={() =>  settonglemenu(false)}><a href="#project" className="hover:text-blue-400">Projects</a></li>
            <li onClick={() => settonglemenu(false)}><a href="#resume" className="hover:text-blue-400">Resume</a></li>
            <li onClick={() => settonglemenu(false)}><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      )}
    <button onClick={() => settonglemenu(!tonglemenu)} className='block md:hidden'><Bars3Icon className="text-white h-5" /></button>
  </nav>
}