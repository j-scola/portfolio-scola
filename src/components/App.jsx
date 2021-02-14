import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Introduction from './Introduction';
import Samples from './Samples';
import Contact from './Contact';
import sampleData from '../data/workSampleData';

const AppWrapper = styled.div`
  font-family: 'Lato', 'Roboto', 'Open Sans';
  background-color: #e7e7e7;
  height: 100vh;
  ${'' /* width: 100vw; */}
  ${'' /* padding: 10px; */}
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  margin-top: 150px;
  min-height: calc(100vh - 150px);
  width: 100%;
`;
const Footer = styled.div`
  background-color; #e8e8e8;
`;

const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;
const HorizontalListItem = styled.li`
  margin: 0px 20px 0px 20px;
`;

const App = () => (
  <Router>
    <AppWrapper className="wrapComponents">
      <Header />
      <Content>
        <Switch>
          <Route exact path="/">
            <Introduction />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/workSamples">
            <Samples samples={sampleData} />
          </Route>
        </Switch>
      </Content>
    </AppWrapper>
  </Router>
);

export default App;
