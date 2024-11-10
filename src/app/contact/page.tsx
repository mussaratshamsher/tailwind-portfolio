"use client"

import React from 'react'
import { useState } from 'react'

export default function Contact() {

  const[name, setName] = useState(" ")
  const[email, setEmail] = useState(" ")
  const[message, setMessage] = useState(" ")

  const [isTrue, setTrue] = useState(false)

const onclickHandler =(e: any)=> {
  e.preventDefault();
  setTrue(true)
}

  return (
    <main>
      <div className='title'>
      <i className='bx bxs-message'></i> Reach Me Out
      </div>




      <form className='flex flex-col justify-center items-center gap-2 mt-1'>

<div className='flex flex-col justify-center p-2 gap-2'>
  <label htmlFor="name" className=' text-white'> Name</label>
  <input type="text" placeholder='type name here' className='py-2 text-black w-96 rounded-lg px-2'
  onChange={(e) =>setName(e.target.value)} value={name} />
</div>

<div className='flex flex-col justify-center  text-white p-2 gap-2'>
  <label htmlFor="email"> Email</label>
  <input type="email" placeholder='type Email here' className='py-2 w-96 rounded-lg px-2  text-black'
   onChange={(e) =>setEmail(e.target.value)} value={email} />
</div>

<div className='flex flex-col justify-center text-white p-2 gap-2'>
  <label htmlFor="message"> Message</label>
  <input type="message" placeholder='type messge here' className='py-2 w-96 rounded-lg px-2  text-black'
   onChange={(e) =>setMessage(e.target.value)} value={message} />
</div>

<div className='flex flex-col justify-center items-center'>
<button onClick={onclickHandler} className='py-1 w-20  mt-5  bg-white text-black font-medium text-lg rounded-lg
 hover:bg-slate-950 hover:text-white hover:text-lg'>Send</button>
  </div>

      </form>
      
 {isTrue && <div className='flex flex-col justify-center items-center '>
  <div className='w-96 gap-2 m-5 border border-b-slate-50 p-10 rounded border-3px bg-gray-900'> 
  <p className='text-white text-center'><b>Name:</b>{name}</p>
  <p className='text-white text-center'><b>Email:</b> {email}</p> 
  <p className='text-white text-center'><b>Message: </b> {message}</p> 
  </div>
</div>
}  


    </main>
    
  )
}
