import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Wrap = styled.div`
  font-family: 'Lato';
  font-weight: 300;
  height: 150px;
  width: 100%;
  width: 100%;
  height: 130px;
  position: fixed;
  display: flex;
  ${'' /* border-bottom: 1px solid black; */}
  justify-content: space-between;
  background-color: inherit;
  z-index: 100;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.2);
`;

const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px;
`;
const TitleText = styled.div`
  font-size: 40px;
`;
const NavBlock = styled.div`
  margin: 20px;
`;

const Header = () => (
  <Wrap>
    <TitleBlock>
      <TitleText>James Scolamieri</TitleText>
    </TitleBlock>
    <NavBlock>
      <Nav />
    </NavBlock>
  </Wrap>
);

export default Header;
