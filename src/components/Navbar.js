import React from 'react';
import logo from '../images/airbnb-logo.png';


export default function Navbar(){
    return(
    <div className="App">
      <nav>
        <img src={logo} width="90px" className='nav--logo'/>
      </nav>
      
    </div>
);
}