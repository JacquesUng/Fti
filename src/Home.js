import React from 'react';

import Header from './Header'; 
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <h2>Dernier numéro !</h2>
        <a
          href="/lire/2020-10/112.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img src="/couverture/2020-10/112.png" alt="" /> 
        </a>
        <a
          className="bottomLink"
          href="/lire/2020-10/112.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>LIRE !</div>
        </a>
      </div>
    </div>
  )
}

export default Home
