import React from 'react'
import img from '../asset/ecomerce.png'

function About() {
  return (
    <section id='about' className='flex flex-col  md:flex-row px-3 py-32 justify-center bg-blue-950  font-HERO text-black  '>

<div className='py-3 px-5 md:w-1/3  '>
    <img src={img}alt="aboutme"/>
</div>
      <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center'>
         <h1 className='text-white font-bold text-7xl border-b-4 w-[320px]'> About Me</h1><br/>
<p className='text-slate-300 text-2xl'>Iam a Front-end  Developer</p><br/>
<p className='text-2xl font-HERO text-pink-300'> A passionate aspiring  developer | react & tailwind enthusiast.

Highly resourceful student eager to contribute to a challenging and competitive environment. Passionate about learning modern web technologies like React and Tailwind CSS to build engaging and intuitive user interfaces. My goal is to continuously enhance my skills and contribute to the personal growth as well as the growth of the organization.</p>
      </div>
</div>
    </section> 
)
}
export default About