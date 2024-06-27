import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';



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
      </Row>
      <div>
      <Row>
        <Col sm={8} className='home1'>
         <h1>Total marks</h1>
         <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          valueFormatter: (value) => (value == null ? '?' : value.toString()),
        },
      ]}
      height={200}
      margin={{ top: 10, bottom: 20 }}
    />
        </Col>
        <Col sm={4} className='home2'>
          <h1>Books</h1>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={200} height={200} value={50} />
      <Gauge width={200} height={200} value={50} valueMin={10} valueMax={60} />
    </Stack>
  
        </Col>
      </Row>
    </div>
    </div>
  );
}

export default Home;
