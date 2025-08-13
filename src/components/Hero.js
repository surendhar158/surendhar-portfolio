import React from 'react'
import hero from '../asset/header.png'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai"
const Hero = () => {
  return (
    <section id='hero' className=' flex flex-col md:flex-row px-3 py-32 justify-center font-HERO text-white text-7xl bg-blue-900'>
      <div className='md:w-1/2 mt-10 flex flex-col'>
        <h1>Hello, <br /> I'm <span className='text-yellow-400'>Surendharan</span>
          <p className='text-2xl'>Iam a front-end developer</p>
        </h1>
        <div className='flex py-10 '>
          <a href='https://www.instagram.com/_surea_official_' className='pr-3 hover:text-black'><AiOutlineInstagram size={40} /></a>
          <a href='https://linkedin.com/surendharanT' className='pr-3  hover:text-black'><AiOutlineLinkedin size={40} /></a>
          <a href='https://github.com/surendhar158' className='pr-3 hover:text-black'><AiOutlineGithub size={40} /></a>
          <a href='https://www.facebook.com/surea sabari' className='pr-3  hover:text-black'><AiOutlineFacebook size={40} /></a>
        </div>
      </div>
      <img className='md:w-1/3 ' src={hero} alt='introduction'></img>
    </section>
  )
}
export default Hero