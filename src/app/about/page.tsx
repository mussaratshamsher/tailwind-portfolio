
import Image from 'next/image';

import hijab from "./../../../public/hijab.jpg"

export default function About() {
  return (
<div className=' flex flex-col-reverse items-center mr-10 ml-10 md:flex-row sm:flex-row lg:flex-row '>
    
  <div className="border-gray-600 border-2 mx-0  mt-5 hyphens-none
   w-90 h-600 p-5 rounded-xl text-gray-200">
      
         <h1 className="font-semibold text-2xl text-center content-center  mb-4"> 🌟Mussarat Shasmsher🌟</h1> 

<p className='justify-center '>
As a passionate Master's in Economics graduate, I thrive  
at the intersection of data and innovation. Currently, I'm 
diving deep into the world of technology as I pursue a
Certified Cloud Applied Generative AI Engineer and Developer
course, where I am honing my skills to transform complex 
economic models into scalable, cloud-based solutions.With a 
strong analytical mindset and a flair for creative problem-solving, I
  leverage my economicexpertise to drive impactful AI-driven strategies. My journey is 
  fueled by a commitment to continuous learning and a desire to harness the power of
   generative AI to tackle real-world challenges.       </p>
 </div > 
<div >
     <Image  className='border shadow-slate-200 inset-5 ml-10  mr-10 mt-5 rounded-full lg:w-64' src={hijab} alt="" width={250} height={250}/>
</div>
</div>
  )
  
}
