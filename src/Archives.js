import React, { Component } from 'react';
import { IssuesContext } from './contexts';
import Header from './Header';
import Year from './Year';

import './Archives.css';

class Archives extends Component {

  render() {
    return (
      <IssuesContext.Consumer>
        {(issues) => {
          return(
            <div className="archives">
              <Header />
              <div className="archives__body">
                <h1>Nos archives</h1>
                {Object.keys(issues).map(year => {
                  return(
                    <Year
                      year={year}
                      issues={issues[year]}
                      key={year}
                    />
                  );
                })}
              </div>
            </div>
          )
        }}
      </IssuesContext.Consumer>
    )
  }  
}

export default Archives;
