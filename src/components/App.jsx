import React from 'react';
import Header from './Header';
import Introduction from './Introduction';
import Samples from './Samples';

const App = (props) => {
  const samples = [
    {
      title: 'AskAGuru',
      description: 'music player',
      tech: 'Vue, Vuex, Flask',
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <Samples samples={samples} />
      </div>
    </div>
  );
};

export default App;
