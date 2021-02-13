import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Samples from './Samples';
import sampleData from '../data/workSampleData';

const App = () => (
  <div className="wrapComponents">
    <div>
      <Header />
    </div>
    <div>
      <Introduction />
    </div>
    <div>
      <Samples samples={sampleData} />
    </div>
  </div>
);

export default App;
