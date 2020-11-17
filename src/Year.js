import React, { Component } from 'react';

import './Year.css';

class Year extends Component {
  render() {
    const { year, issues } = this.props;
    return (
      <div className="year" key={year}>
        <p>{year}</p>
        <div className="issues">
          {issues.map(issue => {
            return (
              <a
                href={issue.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={issue.date}
              >
                <img src={issue.coverUrl} alt="" /> 
              </a>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Year;