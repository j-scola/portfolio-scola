import React from 'react';
import WorkSample from './WorkSample';

const Samples = ({ samples }) => (
  <div>
    {samples.map((sample) => (
      <WorkSample sample={sample} key={Math.random()} />
    ))}
  </div>
);

export default Samples;
