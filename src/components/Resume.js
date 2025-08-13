import React from 'react'
import img from '../asset/Resume.png'

function Resume() {
  return (
    <section className='flex flex-col  md:flex-row px-3 py-32 justify-center bg-blue-950 font-HERO text-black  '>

<div className='py-5 md:w-1/3  '>
   <a href='/resume.pdf'>
    <img className='px-10' src={img} alt='resume'></img>
    </a>
</div>
      <div id='resume' className=' md:w-1/2 flex justify-center'>
      <div className=' text-center mt-5 md:flex flex-col justify-center'>
         <h1 className=' md:text-white font-bold text-7xl border-b-4 w-[240px]'> Resume</h1><br/>
<p className='text-white text-2xl'>You can view my resume <a className='mt-5 md: px-3 py-2 rounded-2xl bg-blue-900 hover:border-2 border-white ' href='/resume.pdf'>Download</a></p>

      </div>
</div>
</section>
)
}

export default Resume
