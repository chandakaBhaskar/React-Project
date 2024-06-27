import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Container } from 'react-bootstrap';

import LocationOnIcon from '@mui/icons-material/LocationOn';

function About() {
  return (
    <div className='tr'>
       <NotificationsActiveIcon id='OP'/>
      <form>
         <input type="text" placeholder='search a transaction' id='jj' ></input>
      </form>
      
      <label>Select Option</label>
  <select id="students">
    <option>Present</option>
    <option>Absent</option>
    <option>Regular</option>
    <option>Total students</option>
  </select>
  <div className='aa'>
     <h1>Good After Noon</h1>
     <h4> John Rice</h4>
</div>

<button className='ra btn btn-primary'>Add Money</button>
<button className='ar btn btn-danger'>Send Money</button>

<br/>
<LocationOnIcon id="op"/>
<h5 className='ll'> Vishkhapatnam</h5>
<LocationOnIcon id="ob"/>
<h5 className='kk'>Hyderabad</h5>
<Container>
<div className='srv'>
<Row>
  <h3 id="ha">OverView</h3>
    <Col sm={4} className='basu5'>
    <div className='bhaskar1'>
   <center><h5> Per Day Meals</h5>
   <h3>$80,675.30</h3>
   <h6>View All</h6></center>
      </div>
    </Col>
    <Col sm={4} className='basu6'>
    <div className='bhaskar2'>
    <center><h5> Per Month Meals</h5>
    <h3> -$14;435.10</h3>
    <h6>View All</h6></center>
      </div>
    </Col>
    <Col sm={4} className='basu7'>
    <div className='bhaskar2'>
    <center><h5> Over All Bills</h5>
    <h3> $30,854.50</h3>
    <h6>View All</h6></center>
      </div>
    </Col>
    </Row>
   
      <Row className='nn'>
      <h3>Paytm Status</h3>
        <Col sm={12} className='sai1'>
        <div className='sai2'>
           <h3>Transaction</h3>
           <h3 id="mia1">Amount</h3>
           <h3 id="mia2">Status</h3>
           <h3 id="mia3">Date</h3>
         </div>
        </Col>
        <Col sm={12} className='sai3'>
        <div className='sai4'>
           <h3 id="mia4">Payment to Kasimkota School</h3>
           <h3 id="mia5"><b>$5,000</b></h3>
           <h3 id="mia6">Success</h3>
           <h3 id="mia7">jan 2,2023</h3>
          
         </div>
        </Col>
        <Col sm={12} className='sai5'>
        <div className='sai6'>
        <h3 id="mia4">Payment to Anakapalli School</h3>
           <h3 id="mia5"><b>$9,000</b></h3>
           <h3 id="mia6">Pending</h3>
           <h3 id="mia7">mar 10,2024</h3>
         </div>
        </Col>
        <Col sm={12} className='sai7'>
        <div className='sai8'>
        <h3 id="mia4">Payment to Tallapalem School</h3>
           <h3 id="mia5"><b>$14,000</b></h3>
           <h3 id="mia6">Failed</h3>
           <h3 id="mia7">Apr 10,2024</h3>
         </div>
        </Col>
        <Col sm={12} className='sai9'>
        <div className='sai10'>
        <h3 id="mia4">Payment to Narsimballi School</h3>
           <h3 id="mia5"><b>$04,000</b></h3>
           <h3 id="mia6">Success</h3>
           <h3 id="mia7">jun 23,2024</h3>
         </div>
        </Col>
        <Col sm={12} className='sai11'>
        <div className='sai12'>
        <h3 id="mia4">Payment to bayyavaram School</h3>
           <h3 id="mia5"><b>$24,000</b></h3>
           <h3 id="mia6">Pending</h3>
           <h3 id="mia7">Dec 10,2023</h3>
         </div>
        </Col>
      </Row>
    </div>
    
    </Container>
   
    </div>
  
  );
}

export default About;
