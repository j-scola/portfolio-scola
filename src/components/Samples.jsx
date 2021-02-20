import React from 'react';
import styled from 'styled-components';

import WorkSample from './WorkSample';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

class Samples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSample: 0,
    };
  }

  changeSample(newInt, length) {
    if (newInt < 0) {
      return this.setState({ currentSample: length - 1 });
    }
    if (newInt >= length) {
      return this.setState({ currentSample: 0 });
    }
    return this.setState({ currentSample: newInt });
  }

  previousSample(int) {
    this.setState({ currentSample: int - 1 });
  }

  nextSample(int) {
    this.setState({ currentSample: int + 1 });
  }

  render() {
    const { currentSample } = this.state;
    const { samples } = this.props;
    return (
      <Wrap>
        <Previous
          className="arrowUp"
          onClick={() => this.changeSample(currentSample - 1, samples.length)}
        >
          arrow up
        </Previous>
        <CurrentSampleWidget>
          {/* <div>rendered content {currentSample.toString()}</div> */}

          <WorkSample sample={samples[currentSample]} />

          {/* {samples.map((sample) => (
            <WorkSample sample={sample} key={Math.random()} />
          ))} */}
        </CurrentSampleWidget>
        <Next
          className="arrowDown"
          onClick={() => this.changeSample(currentSample + 1, samples.length)}
        >
          arrow down
        </Next>
      </Wrap>
    );
  }
}

export default Samples;
