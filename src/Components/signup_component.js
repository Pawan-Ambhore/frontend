
/* Copyright © Iwizdom Systems Pvt. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rohan Magar <rohanm@iwizdom.com>, September 2022
 */

import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      accountType: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password, phone, accountType } = this.state;
    console.log(name,email, password, phone, accountType);
    fetch('/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        accountType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {

        console.log(data, "userRegister");
        if (data.status == 'ok') {
          alert('Register successful');
          window.localStorage.setItem('token', data.data);
          window.location.href = './sign-in';
        } else {
          alert('something went wrong please try again');
        }

      });
  }
  render() {
    return (
      <>
           <Box sx={{ flexGrow: 1}}>
          <AppBar sx={{ position: "static", background:"#ffffff"}}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"black" }}>
                IWIZDOM
              </Typography>
              <Button color="inherit">
                <Link to={'/sign-in'}>Login</Link>
              </Button>

              <Button color="inherit">
                <Link to={'/sign-up'}>Sign up</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <br />
        <br />
        <br />
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <form onSubmit={this.handleSubmit}>
              <h3>Sign Up</h3>

              <div className='mb-3'>
                <label>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              <div className='mb-3'>
                <label>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter email'
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div className='mb-3'>
                <label>Phone</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>

              <div className='mb-3'>
                <label>Role</label>
                {/* <input
                  type='text'
                  className='form-control'
                  placeholder='Last name'
                  onChange={(e) => this.setState({ accountType: e.target.value })}
                /> */}
                     <section className='d-flex justify-content-center'>
                     <Box sx={{ minWidth: 340, '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':{
        // borderRadius: '25px',
        // boxShadow: 2,
     }
     }}>
      <FormControl fullWidth sx={{'& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root':{
        //  borderRadius: '25px',
        //  boxShadow: 2,
        }
        }}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.accountType}
          label="Role"
          onChange={(e) => this.setState({ accountType: e.target.value })}
        >
          <MenuItem value={"Employee"}>Employee</MenuItem>
          <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
              </section>
              </div>

              <div className='mb-3'>
                <label>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter password'
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>
                  Sign Up
                </button>
              </div>
              <p className='forgot-password text-right'>
                Already registered
                <a > <Link className='nav-link' to={'/sign-in'}>
                  sign in?
                </Link></a>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}