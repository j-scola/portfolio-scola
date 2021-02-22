import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 20px;
`;

const WorkSample = ({ sample }) => (
  <Wrap className="workSample">
    <p>{sample.title}</p>
    <p>{sample.role}</p>
    <p>{sample.description}</p>
    <p>{sample.techstack}</p>
  </Wrap>
);

export default WorkSample;
