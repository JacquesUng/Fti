import React, { useState } from 'react';
import { db } from './firebase';
import Header from './Header';

import './Ipq.css';

function Ipq() {
  const [ipq, setIpq] = useState('');

  const handleChange = (event) => {
    setIpq(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ipq !== '') {
      db.collection('ipq').add({
        message: ipq,
        ipqDate: new Date(),
      }).catch(error => {
        console.log(error.message);
      });
      setIpq('');
    }
  }

  return (
    <div className="ipq">
      <Header />
      <div className="ipq__body">
        <h1>Il parait que...</h1>
        <div>Poste ici ton IPQ pour le voir apparaître dans le prochain numéro du FTI !</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Ton IPQ</label>
            <input type="text" placeholder="IPQ" value={ipq} onChange={handleChange} />
            <input type="submit" value="ENVOYER" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Ipq
