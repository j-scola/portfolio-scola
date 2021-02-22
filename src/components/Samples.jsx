import React, { useState } from 'react';
import styled from 'styled-components';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';

import { Link, useParams } from 'react-router-dom';

import WorkSample from './WorkSample';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 80px;
`;
const Previous = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Next = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const CurrentSampleWidget = styled.div`
  height: calc(100vh - 450px);
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Arrow = styled.img`
  height: 50px;
  width: 50px;
`;

const Samples = ({ samples }) => {
  const { id } = useParams();
  const initId = parseInt(id) ? parseInt(id) - 1 : 0;
  const nextPath = `/work-samples/${
    initId >= samples.length - 1 ? 1 : initId + 2
  }`;
  const prevPath = `/work-samples/${initId <= 0 ? samples.length : initId}`;

  return (
    <Wrap>
      <Link to={prevPath}>
        <Previous className="arrowUp">
          <Arrow className="arrow" src={leftArrow} alt="<" />
        </Previous>
      </Link>
      <CurrentSampleWidget>
        {id ? (
          <WorkSample sample={samples[initId]} />
        ) : (
          <WorkSample sample={samples[0]} />
        )}
      </CurrentSampleWidget>
      <Link to={nextPath}>
        <Next className="arrowDown">
          <Arrow className="arrow" src={rightArrow} alt=">" />
        </Next>
      </Link>
    </Wrap>
  );
};

export default Samples;
