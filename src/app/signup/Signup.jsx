'use client'

import Image from 'next/image'
import React from 'react'
import signupImg from '../../app/assets/signup.svg'

const Signup = () => {
  return (
    <div className='text-white container grid grid-cols-12'>
      <div className='col-span-5 col-start-5'>
        <div className='py-5'>
          <div className='flex justify-center m-5'>
            <Image src={signupImg} alt='signup image' style={{
              width:"50%"
            }}></Image>
          </div>
          <h1 className='text-3xl text-center mt-2'>Signup Here</h1>
          <form action='#!' className='mt-5'>
            {/* Username */}
            <div className='mt-3'>
              <label htmlFor='user_name' className='block text-sm font-medium mb-2'>
                Username
              </label>
              <input type='text' className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' id='user_name' placeholder='Enter username for ex. john'/>
            </div>
            {/* Email */}
            <div className='mt-3'>
              <label htmlFor='user_email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input type='email' className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' id='user_email' placeholder='Enter email for ex. john@gmail.com'/>
            </div>
            {/* Password */}
            <div className='mt-3'>
              <label htmlFor='user_password' className='block text-sm font-medium mb-2'>
                Password
              </label>
              <input type='password' className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' id='user_password' placeholder='Enter password'/>
            </div>
            {/* About */}
            <div className='mt-3'>
            <label htmlFor='user_about' className='block text-sm font-medium mb-2'>About</label>
            <textarea type='text' className='w-full p-3.5 rounded-3xl bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' id='user_about' rows={5} placeholder='Enter text here'/>
          </div>
          <div className="mt-3 flex justify-center space-x-5">
            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-950'>Signup</button>
            <button className='bg-red-500 py-2 px-3 rounded-lg hover:bg-red-950'>Reset</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup