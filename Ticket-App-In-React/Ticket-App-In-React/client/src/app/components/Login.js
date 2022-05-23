import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Row, Col } from "reactstrap";

import AuthenticationService from "../services/AuthenticationService";

import img4 from '../photos/login.png'
import { Button, TextField, } from '@mui/material';




class Login extends Component {

  constructor(props) {
    super(props);
    
   
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
     
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService
        .signin(this.state.username, 
                  this.state.password)
               
      .then(
        () => {
          this.props.history.push('/profile');
        },
        error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({error: "Can not signin successfully ! Please check username/password again"});
        }
    );
  }

  render() {
    const title = <h2 style={{textAlign:"center"}}>Login User</h2>;

    return ( 
      <div >
        <AppNavbar/>
        <div  >
        <Container fluid>
      
          <Row >
          <Col style={{marginTop:"140px"}} sm="6" md={{ size: 3, offset: 2}}>
            <div style={{marginBottom: "10px", marginTop:"10px"}}>
              {title}
            </div>
            <Form  onSubmit={this.doLogin}>
              <FormGroup>        
                <TextField required
                      fullWidth id="fullWidth"
                      label="UserName"
                      name="username"
                      value={this.state.username}
                      onChange={this.changeHandler}
                      type="text"
                      variant="standard"
                />
              </FormGroup>

              <FormGroup>

                <TextField required
                      fullWidth id="fullWidth"
                      label="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      type="password"
                      variant="standard"
                />
              </FormGroup>
              <Button sx={{ mt: 3, mb: 2 }} fullWidth variant="contained" type="submit" size="lg">Sign In</Button>
              {
                this.state.error && (
                  <Alert color="danger">
                    {this.state.error}
                  </Alert>
                )
              }
            </Form>
            </Col>

            <Col style={{marginTop:"60px"}} sm='6' md={{size:4,offset:1}}>

              <img className='login' src={img4} alt="Logo" />
              
              </Col>
          </Row>
          
        </Container>
        </div>
      </div>);
  }
}

export default Login;