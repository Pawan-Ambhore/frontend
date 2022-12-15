/* Copyright © Iwizdom Systems Pvt. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rohan Magar <rohanm@iwizdom.com>, September 2022
 */

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../App.css';
import profile from './user.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch('/login-user', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
        if (data.status == 'ok') {
          alert('login successful');
          window.localStorage.setItem('token', data.data);
          window.location.href = './profile';
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

        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>

              <div className="imgs">
                <div className="img-container">
                  <img src={profile} alt="Profile" className="profileCSS" />
                </div>
              </div>

              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                <a>
                  {' '}
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </a>
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }
}