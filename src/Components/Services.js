import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';



const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

function Services() {
  return (
    <div>
        <Container>
         <Row className='gh'>
         <h2 style={{marginBottom:"20px"}}><b>Total Students(368)</b></h2>
         <Col sm={3} className='adi'>
         <div className='po'>
             <h5>UG-BSC-Computer</h5>
             <h2>16</h2> 
             <p> 1SEM-BSC CS</p>  
             </div>
            </Col>
            <Col sm={3} className='ab'>
            <div className='kl'>
            <h5>PG_BSC_SCIENCE</h5>
            <h2>316</h2>
            <p>1SEM-BSC CS</p>
            </div>
            </Col>
            <Col sm={3} className='bd'>
            <div className='mm'>
            <h5>PHD-BSC-Computer Science</h5>
            <h2>36</h2>
            <p> 1SEM-BSC CS</p>
            </div>
            </Col>
           
            <Col sm={3}>
          <center><h5>Admission Category</h5></center>
          <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
   
            </Col>
         </Row>
       <Row>
          <Col sm={9} className='cd'>
           <center> <h1>Seven Year Static</h1></center>
            <BarChart
      width={1000}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />

          </Col>
          <Col sm={3} className='gh'>
          <div className='mn'>
           <center> <h5>My Reagion</h5></center>
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
      width={330}
      height={200}
    />
    </div>
          </Col>
       </Row>
         </Container>
    </div>
  );
}

export default Services;
