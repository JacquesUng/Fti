import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__navbar__nav">
          <a className="mainLink" href="/"><div>Le F'TI</div></a>
          <div>|</div>
          <a className="link" href="/dessins"><div>DESSINS</div></a>
          <a className="link" href="/ipq"><div>IPQ</div></a>
          <a className="link" href="/archives"><div>ARCHIVES</div></a>
          <a className="link" href="/connexion"><div>REDACTION</div></a>
        </div>
        <a className="fbLink" href="https://www.facebook.com/fti.centralelille">
          <img className="fbLogo" src={require("./fb_logo.png")} alt="aaa" />
        </a>
      </div>
      
      <div className="banner">
        <img className="banner__image" src={require("./fti_banner.PNG")} alt="aaa" />
      </div>
    </div>
  )
}

export default Header;