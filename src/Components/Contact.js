import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';



function Home() {
  return (
    <div className='Sai'>
      <Row>
     <center> <h1>Days Remaining</h1></center>
        <Col sm={4} className='basu'>
          
          <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={300}
    />
        </Col>
        
        <Col sm={4} className='yuva'>
       
          
          <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={900}
      height={400}
    />
        </Col>
      
        <Col sm={6}>
       
      <center><h1>Food Minister Contact</h1>
      <h2><b> 91+9063028968</b></h2>
      <h3>If you have any prblm <br/>Plz contact This Number</h3>
      <h5>yuvaneshpadala@gmail.com</h5></center>
      
        </Col>
        <Col sm={6} className='home2'>
       <center><h1>School Principal Contact</h1>
      <h2><b> 91+7993976520</b></h2>
      <h3>If you have any prblm <br/>Plz contact This Number</h3>
      <h5>Adityanallam@gmail.com</h5></center>
        </Col>
      </Row>
    </div>
   
  );
}

export default Home;
