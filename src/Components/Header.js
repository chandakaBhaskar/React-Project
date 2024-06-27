import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <div className='menu'>
        <ul>
          <Link to="/React-Project"><li>Home</li></Link>
         <Link to="/About"><li>About</li></Link>
         <Link to="/Services"><li>Services</li></Link>
         <Link to="/Contact"><li>Contact</li></Link>
      </ul>
   </div>
  );
}

export default Header;
