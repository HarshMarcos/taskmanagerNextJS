'use client'

import React from 'react'

const Signup = () => {
  return (
    <div className='text-white container grid grid-cols-12'>
      <div className='col-span-4 col-start-5 border border-blue-950'>
        <div className='py-5'>
          <h1 className='text-3xl'>Signup Here</h1>
          <form action='#!'>
            <div className='mt-3'>
              <label htmlFor='user_name' className='block text-sm font-medium mg-2'>
                Username
              </label>
              <input type='text' className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950' placeholder='Enter username for ex. john'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup