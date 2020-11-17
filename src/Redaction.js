import React from 'react';
import Connexion from './Connexion';
import { UserContext } from './contexts';

import './Redaction.css';

function Redaction() {
  return (
    <UserContext.Consumer>
      {(user) => {
        return user?
          <p>REDACTION</p>:
          <Connexion />
          
      }}
    </UserContext.Consumer>
  );
}

export default Redaction;