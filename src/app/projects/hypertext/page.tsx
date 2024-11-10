import React from 'react'



export default function Hypertext() {
  return (
    <div >
    <div className='flex flex-col lg:flex-row'>

    <main className=" flex flex-col w-[400px] h-[450px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 mt-5 ml-7">
            <div className= "title" >
             
      Editable and Shareable Resume builder <br />
      
              <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white'>
            <a href="https://vercel.com/mussarat-shamshers-projects/milestone5-shareable-resume" target='blank'>Click</a></button> 
           
            </div>
           
            <div>
                
            </div>
        </main>
    
        <main className="flex flex-col w-[400px] h-[450px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 mt-5 ml-7">
            <div className= "title" >
             
            Portfolio <br />
             <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white'>
             <a href="https://www.npmjs.com/package/atm-by-mussarat" target='blank'> Click</a></button>
              <br />
              
            </div>
            
            <div>
                
            </div>
        </main>
    
        <main className="flex flex-col w-[400px] h-[450px] rounded border-2 border-slate-100 shadow shadow-purple-600 p-14 mt-5 ml-7">
            <div className= "title" >
    
            Yummy Chocolates <br />
            
             <button className='w-200px h-50px mt-10 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white'>
             <a href="https://www.npmjs.com/package/student-management-sys-by-mussarat" target='blank'> Click</a></button> <br />
           
            </div> 
            <div>
                
            </div>
            
        </main> 
        </div><br />
        <button className='w-100px h-50px mt-10 ml-20 border rounded bg-purple-800 text-white hover:text-purple-950 hover:bg-white'>
        <a href="./../../projects"><i className='bx bxs-left-arrow'></i>Back</a></button>
        </div>
  )
}
