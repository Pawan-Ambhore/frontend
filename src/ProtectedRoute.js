import { Outlet, Navigate } from 'react-router-dom'
import React,{useEffect, useState} from 'react';
// import {getToken} from "./components/AuthService"

let token = localStorage.getItem('token');

const ProtectedRoute = () => {
    
  return(
    token ? <Outlet/> : <Navigate to="/Sign-in"/>
  )
}

export default ProtectedRoute;