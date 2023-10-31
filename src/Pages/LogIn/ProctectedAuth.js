import React from 'react'
import { useUserAuthContext } from '../../Context/UserAuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProctectedAuth = () => {
    const {user} = useUserAuthContext()
    if(!user){
        return <Navigate to="/login"/>
    }

  return <Outlet/>
}

export default ProctectedAuth
