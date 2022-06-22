import React from 'react';
import hero from '../../assets/hero/wheat-header.jpeg';

function Header(props) {

  return (
    <header className="row header">
      <h1>Nialvo celsius not celcius</h1>
      <img src={hero} className="hero" alt="a wheat field"></img>
      {props.children}
    </header>
  );
}

export default Header;
