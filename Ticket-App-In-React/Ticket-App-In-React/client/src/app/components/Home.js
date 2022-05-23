import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import {  Container ,Row, Col } from 'reactstrap';

import seo from '../photos/img1.jpg';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div  >
        <AppNavbar/>
        <div id="bg">
        <img clasName='home' id="bgimg" src={seo} alt="seo" />
        </div>
        <Container fluid>
        <Row>
          <Col>
          {/* <img clasName='home' id="bgimg" src={seo} alt="seo" /> */}
    </Col>
      

           <Col style={{marginTop:"250px"}} sm="6" md={{ size: 10, offset: 1 }}>
          <a href='/signup'><h1 style={{fontFamily:' serif', color: 'white'}}> Welcome To</h1>
          <h1 style={{fontFamily:' serif',color: 'white'}}> Ticket System</h1></a>
          </Col> 
        </Row>
        </Container>
      </div>
    );
  }
}

export default Home;