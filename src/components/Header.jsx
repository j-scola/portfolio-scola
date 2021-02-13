import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Wrap = styled.div`
  display: flex;
`;
const TitleBlock = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TitleText = styled.div`
  font-size: 40px;
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
const Header = () => (
  <Wrap>
    <TitleBlock>
      <TitleText>James Scolamieri :)</TitleText>
      <div>
        <HorizontalList>
          <HorizontalListItem>
            <a href="https://github.com/j-scola">@j-scola on github</a>
          </HorizontalListItem>
          <HorizontalListItem>
            {' '}
            <a href="https://linkedin.com/in/james-scolamieri">
              linkedin profile
            </a>
          </HorizontalListItem>
        </HorizontalList>
      </div>
    </TitleBlock>
    <Nav />
  </Wrap>
);

export default Header;
