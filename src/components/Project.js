import React from 'react'
import project from '../asset/Reasons-to-make-your-e-commerce-accessible.jpg'
function Project() {
  const config={
    projects:[
      {
        image:project,
        description:'This E-Commerce Website Like Flipcart,Built in React js and Tailwindcss'
      },    
    ]
  }
  return (
   <section id='project' className='  bg-blue-900 flex flex-col py-32 px-5 text-white justify-center'>
   <div className=' mb-10'>
   <div className='flex justify-center'>
 <h1 className='text-white font-bold text-7xl  border-b-4 w-[250px]'>project</h1>
   </div>
   </div>
   <p className='text-center py-5 text-gray-400 text-3xl'>These are my best project using react js and tailwind</p>
 <div className='flex flex-col md:flex-row justify-center gap-20 '>
    {config.projects.map((projects) => ( 
      <div className='relative'>
        <img className=' h-[400px] ' src={projects.image} alt='project'/>
  <div className='absolute left-0 right-0 bottom-0 top-0 bg-gray-500 opacity-0 duration-100 py-10 hover:opacity-75'>
   <p className='font-HERO text-center py-28 text-black'>{projects.description}</p>
   <div className='flex justify-center'>
<a className='px-4 py-4 rounded-2xl justify-center bg-blue-950 hover:border-2 border-white' href='https://github.com/surendhar158/Ecommerce.git'>view project</a>
  </div>
  </div>
     </div>
     ))
   }
 </div>
   </section>
  )
}

export default Project