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
  ${'' /* height: 100vh; */}
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
  ${'' /* background-color: #e8e8e8; */}
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px -5px 5px 1px rgba(0, 0, 0, 0.2);
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
      <Footer>Footer</Footer>
    </AppWrapper>
  </Router>
);

export default App;
