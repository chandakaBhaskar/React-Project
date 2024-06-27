import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { PieChart } from '@mui/x-charts/PieChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';





const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },  
];

const data1 = [
  { x: 100, y: 200, id: 1 },
  { x: 120, y: 100, id: 2 },
  { x: 170, y: 300, id: 3 },
  { x: 140, y: 250, id: 4 },
  { x: 150, y: 400, id: 5 },
  { x: 110, y: 280, id: 6 },
];

const data2 = [
  { x: 300, y: 300, id: 1 },
  { x: 400, y: 500, id: 2 },
  { x: 200, y: 700, id: 3 },
  { x: 340, y: 350, id: 4 },
  { x: 560, y: 500, id: 5 },
  { x: 230, y: 780, id: 6 },
  { x: 500, y: 400, id: 7 },
  { x: 300, y: 500, id: 8 },
  { x: 240, y: 300, id: 9 },
  { x: 320, y: 550, id: 10 },
  { x: 500, y: 400, id: 11 },
  { x: 420, y: 280, id: 12 },
];


function About() {
  return (
    <div>
      <h1><span style={{color:'red'}}>E</span>xcutive <span style={{ color:'red'}}>D</span>ashboard</h1>
      <Container>
       <Row className='qr'>
       
         <Col sm={3} className='bha'>
         <div className='sk'>
           Auto date range
           <h6>This Month</h6>
         </div>
         </Col>
         <Col sm={3} className='va'>
         <div className='ni'>
         Services
         <h6>All</h6>
         </div>
         </Col>
         <Col sm={3} className='ba'>
         <div className='su'>
           Posts
           <h6>All</h6>
         </div>
         </Col>
         <Col sm={3} className='yu'>
         <div className='as'>
        <input type="text"placeholder="Search" id='ss'  ></input>
         </div>
         </Col>
       </Row>
       <Row>
       
       <Col sm={3} className='ia'>
       <div className='ai'>
        <center><h2>New Foods</h2>
        <b><h3>250</h3></b>
          <h1>25%</h1></center>
       </div>
       </Col>
       <Col sm={3} className='na'>
       <div className='la'>
       <center><h2> Eating Rate</h2>
       <b><h3>9.86</h3></b>
       <h1>55%</h1></center>
       </div>
       </Col>
       <Col sm={3} className='km'>
       <div className='di'>
        <center><h2>New Mrr</h2>
          <b><h3>88.5</h3></b>
          <h1>50%</h1></center>
       </div>
       </Col>
       <Col sm={3} className='ka'>
     
       <div className='ak'>
       <h5> Page View</h5>
         <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          data,
        },
      ]}
      height={190}
    />
          
       </div>
       </Col>
     </Row>
      <br/><br/>
       <Row>
         <Col sm={6} className='ma'>
         <div className='am'>
            <h1>MRR Seats by Country</h1>
            <ScatterChart
      width={600}
      height={300}
      series={[
        {
          data: data1,
          yAxisKey: 'leftAxis',
          valueFormatter: ({ x, y }) => `${x}cm, ${y}kg`,
        },
        {
          data: data2,
          yAxisKey: 'rightAxis',
          valueFormatter: ({ x, y }) => `${x}cm, ${y}kg`,
        },
      ]}
      xAxis={[{ min: 0 }]}
      yAxis={[
        { id: 'leftAxis', min: 0 },
        { id: 'rightAxis', min: 0 },
      ]}
      rightAxis="rightAxis"
      sx={{
        [`& .${axisClasses.left}`]: {
          line: { stroke: '#8884d8' },
          text: { fill: '#8884d8' },
        },
        [`& .${axisClasses.right}`]: {
          line: { stroke: '#82ca9d' },
          text: { fill: '#82ca9d' },
        },
      }}
    />
          </div>
          </Col>
          <Col sm={6} className='da'>
           <div className='ad'>
              <h1>MRR</h1>
              <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={650}
      height={300}
    />
           </div>
          </Col>
         
       </Row>
       </Container>
    </div>
  );
}

export default About;
