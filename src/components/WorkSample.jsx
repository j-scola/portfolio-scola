import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 20px;
`;

const WorkSample = ({ sample }) => (
  <Wrap className="workSample">
    <p>{sample.title}</p>
  </Wrap>
);

export default WorkSample;
