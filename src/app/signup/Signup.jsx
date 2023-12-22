'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import signupImg from '../../app/assets/signup.svg'
import { toast } from 'react-toastify'
import { signUp } from '@/services/userService'





const Signup = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    password:'',
    about:'',
    profileURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
  })

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(data)
    if(data.name.trim()==='' || data.name===null ){
      toast.warn("Username is required", {
        position:"top-center"
      })
    }else if(data.name.length < 3){
      toast.warn("Username must be at least 3 characters long", {
        position:"top-center"
      })
    }
    if(data.email.trim()==='' || data.email===null){
      toast.error("Email is required", {
        position:"top-center"
      })
    }
    if(data.password.trim()==='' || data.password===null){
      toast.error("Email is required", {
        position:"top-center"
      })
    }else if(data.password.length < 3){
      toast.warn("Password must be at least 3 characters long", {
        position:"top-center"
      })
    }

    try {
      const result = await signUp(data)
      console.log(result);
      toast.success("User Registered Successfully", {
        position:"top-center"
      })
    } catch (error) {
      console.log(error)
      toast.error("Failed to register",{
        position:"top-center"
      })
    }
    setData({
      name:'',
      email:'',
      password:'',
      about:'',
      profileURL:''
  
    })
  }
  
  const handleReset = () => {
    setData({
      name:'',
      email:'',
      password:'',
      about:'',
      profileURL:''
  
    })
  }


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
          <form action='#!' className='mt-5' onSubmit={handleSignUp}>
            {/* Username */}
            <div className='mt-3'>
              <label htmlFor='user_name' className='block text-sm font-medium mb-2'>
                Username
              </label>
              <input type='text' 
                className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' 
                id='user_name' 
                placeholder='Enter username for ex. john'
                name="user_name"
                onChange={(e)=>{
                  setData({
                    ...data,
                    name:e.target.value
                  });
                }}
                value={data.name}
              />
            </div>
            {/* Email */}
            <div className='mt-3'>
              <label htmlFor='user_email' className='block text-sm font-medium mb-2'>
                Email
              </label>
              <input type='email' 
                className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' 
                id='user_email' 
                placeholder='Enter email for ex. john@gmail.com'
                name='user_email'
                onChange={(e)=>{
                  setData({
                    ...data,
                    email:e.target.value
                  });
                }}
                value={data.email}  
              />
            </div>
            {/* Password */}
            <div className='mt-3'>
              <label htmlFor='user_password' className='block text-sm font-medium mb-2'>
                Password
              </label>
              <input 
                type='password' 
                className='w-full p-3.5 rounded-full bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' 
                id='user_password' 
                placeholder='Enter password'
                name='user_password'
                onChange={(e)=>{
                  setData({
                    ...data,
                    password:e.target.value
                  });
                }}
                value={data.password}
              />
            </div>
            {/* About */}
            <div className='mt-3'>
            <label htmlFor='user_about' className='block text-sm font-medium mb-2'>About</label>
            <textarea 
              type='text' 
              className='w-full p-3.5 rounded-3xl bg-blue-950 focus:ring-blue-950 border border-blue-950 ps-3' 
              id='user_about' 
              rows={5} 
              placeholder='Enter text here'
              name='user_about'
              onChange={(e)=>{
                setData({
                  ...data,
                  about:e.target.value
                });
              }}
              value={data.about}
            />
          </div>
          <div className="mt-3 flex justify-center space-x-5">
            <button type='submit' className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-950'>Signup</button>
            <button type='reset' className='bg-red-500 py-2 px-3 rounded-lg hover:bg-red-950' onClick={handleReset}>Reset</button>
          </div>
          {/* {
            JSON.stringify(data)
          } */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup