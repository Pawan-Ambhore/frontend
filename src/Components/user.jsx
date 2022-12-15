/* Copyright © Iwizdom Systems Pvt. Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rohan Magar <rohanm@iwizdom.com>, September 2022
 */

import React, { Component, useEffect } from 'react';
// import './userDetails.css';
import SideBar from './Sidebar/SideBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import profile from './UserImage/user.png';
import Axios from "axios";
import Button from '@mui/material/Button';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';

export default class UserDetails extends Component {



  constructor(props) {
    super(props);
    this.state = {
      userData: '',
    };
  }
  componentDidMount() {
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
      .then((data) => {
        console.log(data, 'userData');
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <>
      <div>
        <SideBar>
          {/*navbar*/}
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Profile</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link className="nav-link" to={'/Dashboard'}>
                      Home
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <br />

          {/* <div className="container my-container">
            <div className="center-align">

              <br />
              <h3>User Details</h3>
              <br />
              <h5>Name - {this.state.userData.fname}</h5>
              <h6>Email - {this.state.userData.email}</h6>
            </div>

          </div> */}

<div className="gradient-custom-2" >
      <MDBContainer style={{ borderRadius: '25px' }}>
        <MDBRow className="justify-content-center align-items-center h-0">
          <MDBCol lg="6" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: 'rgb(0 81 121)', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={profile}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" backgroundColor="red">
                    Edit profile
                  </MDBBtn>
                </div>
             
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{this.state.userData.fname}</MDBTypography>
                  
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div>
           
                  <Button variant="contained">
                  Edit profile

                  </Button>
                </div>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
               
                    <MDBCardText className="mb-1 h5">
                      13
                      </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Labled Images</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      4
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Trained Images</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      17
                      </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Detected Images</MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div  style={{ backgroundColor: '#f8f9fa' }}>
                  
                    <MDBCardText className="font-italic mb-1">Employee Id : </MDBCardText>
                    <MDBCardText className="font-italic mb-1">Email : {this.state.userData.email}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Contact Details: {this.state.userData.phone} </MDBCardText>
                    <MDBCardText className="font-italic mb-0">Role: {this.state.userData.accountType} </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>




	
        </SideBar>
      </div>
  </>
    );
  }
}
