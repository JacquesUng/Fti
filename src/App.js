import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Archives from './Archives';
import Drawings from './Drawings';
import Home from './Home';
import Ipq from './Ipq';
import Redaction from './Redaction';
import { db } from './firebase';
import { IssuesContext, UserContext } from './contexts';

class App extends Component {

  state = {
    user: '',
    issues: {},
  };

  componentDidMount() {
    this.getIssues();
  }

  getYear = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
  
    return (month<=7)? `${year - 1}\u00a0-\u00a0${year}`: `${year}\u00a0-\u00a0${year + 1}`;
  }
  
  getIssues = () => {
    db.collection('issues').orderBy('issueDate', 'desc').get().then(result => {
      const issueCollection = result.docs.map(doc => {
        return ({
          docUrl: doc.data().docUrl,
          coverUrl: doc.data().coverUrl,
          title: doc.data().title,
          date: doc.data().issueDate.toDate(),
        });
      });
  
      return issueCollection;
    }).then(issueCollectionResult => {
      const issues = {};
      issueCollectionResult.forEach(issue => {
        const year = this.getYear(issue.date);
        if(!Object.keys(issues).includes(year)) {
          issues[year] = [];
        }
        const yearList = issues[year];
        yearList.push(issue);
        issues[year] = yearList;
      });
      
      return issues;
    }).then(issuesResult => {
      this.setState({
        issues: issuesResult,
      });
    }).catch(error => {
      console.log(error.message);
    })
  }
  
  render() {
    const { issues } = this.state;

    return (
      <div className="App">
        <UserContext.Provider>
          <IssuesContext.Provider value={issues}>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dessins" component={Drawings} />
                <Route exact path="/ipq" component={Ipq} />
                <Route exact path="/archives" component={Archives} />
                <Route exact path="/connexion" component={Redaction} />
              </Switch>
            </Router>
          </IssuesContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;