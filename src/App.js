import React from 'react';
import'./App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';




function App() {
  return (
    <div className='one'>
      <Row>
         <Router>
          <Col sm={2} className='bsu'><Header/></Col>
          <Col sm={10} className='mia'>
           <Routes> 
            <Route path='/React-Project'exact Component={Home}/>
            <Route path='/About'exact Component={About}/>
            <Route path='/Services'exact Component={Services}/>
            <Route path='/Contact'exact Component={Contact}/>
            </Routes>
         </Col>
         </Router>
      </Row>
         
    </div>
  );
}

export default App;
