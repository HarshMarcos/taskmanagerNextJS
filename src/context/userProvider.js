'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { currentUser } from '@/services/userService'


const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(undefined)
    
    useEffect(async ()=>{
        try {
            const cuser = await currentUser();
            console.log(cuser)
            setUser({ ...user })
        } catch (error) {
            console.log(error)
            setUser(undefined)
        }
    },[])
    return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider