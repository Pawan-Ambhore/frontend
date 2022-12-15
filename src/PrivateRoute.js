import { Outlet, Navigate } from 'react-router-dom'
import React,{useEffect, useState} from 'react';

const PrivateRoute = ({children}) => {

  const [users, setUsers] = useState('')
  const [admin, setAdmin] = useState(true);
  const [supervisor, setSupervisor] = useState(false);
  const [employee, setEmployee] = useState(false);

    const fetchData = () => {
      fetch('/userData', {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.data.accountType, 'userData');
          setUsers({ userData: result.data.accountType });
          if(result.data.accountType === "Supervisor"){
            setSupervisor(true);
          }else{
            setSupervisor(false);
          }
          if(result.data.accountType === "Employee"){
            setEmployee(true);
          }else{
            setEmployee(false);
          }
          if(result.data.accountType === "Admin"){
            setAdmin(true);
          }else{
            setAdmin(false);
          }
        });
    }
  
    useEffect(() => {
      fetchData()
    }, [])
    
  return (

     admin || supervisor ? <Outlet/> : <Navigate to="/profile"/>
   
  );
};

export default PrivateRoute;