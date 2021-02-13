import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Introduction from './Introduction';
import Samples from './Samples';
import sampleData from '../data/workSampleData';

const App = () => (
  <Router>
    <div className="wrapComponents">
      <Header />
      <Switch>
        <Route exact path="/">
          <Introduction />
        </Route>
        <Route path="/contact">
          <div>email, linkedin, github</div>
        </Route>
        <Route path="/workSamples">
          <Samples samples={sampleData} />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;

/* <Router>
    <div className="wrapComponents">
      <Header />
      <Switch>
        <Route path="/home">
          <Introduction />
        </Route>
        <Route path="/contact">
          <div>email, linkedin, github</div>
        </Route>
        <Route path="/work-samples">
          <Samples samples={sampleData} />
        </Route>
      </Switch>
    </div>
  </Router> */
