/* Copyright © Iwizdom Systems Pvt. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rohan Magar <rohanm@iwizdom.com>, September 2022
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Components/login_component';
import SignUp from './Components/signup_component';
import UserDetails from './Components/user';

function App() {
 
  return (
    <Router>
      <Routes>
          
          <Route path='/' element= {<Login/>} />       
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/sign-up' element={<SignUp/>} />

          <Route element={<ProtectedRoute/>}>
              <Route path='/profile' element={<UserDetails />} />
          </Route>
   
      </Routes>
    </Router>
  );
}

export default App;
