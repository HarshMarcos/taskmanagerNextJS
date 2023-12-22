'use client'

import React, { useState } from 'react'
import signupImg from '../../app/assets/signup.svg'
import Image from 'next/image'
import { validEmail } from '@/helper/regex'
import { toast } from 'react-toastify'
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
        email:'',
        password:'',
    })

    const handleLogin = async (e) =>{
        e.preventDefault();
        console.log(data);
        if(!validEmail.test(data.email)){
            setData({ ...data,
                email:e.target.value});
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
            const result = await login(data)
            console.log(result);
            toast.success("Logged In", {
              position:"top-center"
            })
            router.push("/profile/user")

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message, {
                position:'top-center'
            })
            console.log(error.response.data.message)
        }
        setData({
            email:'',
            password:'',
        })
    }

    const handleReset = () =>{
        setData({
            email:'',
            password:'',
        })
    }
  return (
    <div className='text-white container grid grid-cols-12'>
        <div className='col-span-5 col-start-5'>
            <div className='py-5'>
                <div className='flex justify-center m-5'>
                    <Image src={signupImg} alt='signup image' style={{
                            width:"50%"
                        }}>
                    </Image>
                </div>
                <h1 className='text-3xl text-center mt-2'>Login Here</h1>
                <form action="#!" className='mt-5' onSubmit={handleLogin}>
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
                    {/* {
                        JSON.stringify(data)
                    }                                 */}
                    <div className="mt-5 flex justify-center space-x-5">
                        <button type='submit' className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-950'>Login</button>
                        <button type='reset' className='bg-red-500 py-2 px-3 rounded-lg hover:bg-red-950' onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login