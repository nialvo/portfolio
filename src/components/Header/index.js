import React from 'react';
import hero from '../../assets/hero/wheat-header.jpeg';

function Header(props) {

  return (
    <div id="container">
    <header className="header">
      <h1 className="top left ">Nialvo</h1>
      
        <div id="contents">
          <img src={hero} className="hero" alt="a wheat field"></img>
        </div>
        <div id="gradient"></div>
      

      <div className="top right">{props.children}</div>
      
    </header>
    </div>
  );
}

export default Header;


//className="hero"