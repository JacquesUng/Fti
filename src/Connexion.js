import React from 'react';

import './Connexion.css';

function Connexion() {
  return (
    <div className="redaction">
      <div className="bar">
        <div>{"Le F'TI\u00a0"}</div><div>|</div><div className="title">{"\u00a0Entrée des artistes"}</div>
      </div>
      <form>
        <label>Adresse email</label>
        <input type="text" />
        <label>Mot de passe</label>
        <input type="text" />
        <div className="buttons">
          <a href="/"><input type="button" value="RETOUR"/></a>
          <input type="submit" value="SE CONNECTER" />
        </div>
      </form>
    </div>
  )
}

export default Connexion;
