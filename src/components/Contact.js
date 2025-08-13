import React from 'react'


function Contact() {
  return (
    <section id='contact' className='flex flex-col justify-center md:flex-row px-3 py-32  bg-blue-900 font-HERO text-black  '>
<div className='flex flex-col items-center'>
         <h1 className='text-white font-bold text-7xl mb-5 border-b-4 w-[240px]'>contact</h1>
<p className='text-black text-3xl'>if you want to discuss more in details,please contact me </p><br/>
     <a className='p-5 font-bold text-2xl' href="mailto:surendhar@dhya.in"><span className='text-gray-300 font-bold'>✉️Email :</span> Surendhar@dhya.in</a>

      <div className='font-bold text-2xl'><span className='text-gray-300 font-bold'>📞Contact Number:</span>
  <span className='hover:text-white'>  7092895136</span>
</div>
   

      </div>

</section>

)
}

export default Contact