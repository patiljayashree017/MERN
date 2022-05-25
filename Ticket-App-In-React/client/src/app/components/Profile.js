import React, { Component } from 'react';
import AppNavbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"
import AddTicket from "./Add"
import TicketDisplay from "../components/TicketDisplay";
import { getTicket } from '../store/actions/TicketAction';

import AuthenticationService from '../services/AuthenticationService';
import { connect } from 'react-redux';


class Profile extends Component {

  constructor(props) {
    super(props);
  
    this.state = {user: undefined};
    this.state = {tickets: undefined};
  }


  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({user: user});
    this.props.getTicket();
    
  }

  render() {
    let userInfo = "";
    const user = this.state.user;
    // login
    if (user && user.accessToken) {

      userInfo = (
        <>
        <h1>Ticket Dashboard</h1>
       
                <div style={{marginTop:"20px"}}>      
                      <AddTicket user={user}/>
                      <TicketDisplay user={user}/>
                </div>
                </>
              );
    } else { // not login
      userInfo = <div style={{marginTop:"20px"}}>
                    <Alert variant="primary">
                      <h2>Please Login Again</h2>
                      <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
                    </Alert>
                  </div>
    }

    
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
        {userInfo}
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    tickets:state.tickets,
  };
}

export default connect(mapStateToProps,{getTicket}) (Profile);

