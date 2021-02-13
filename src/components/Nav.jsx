import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;
const HorizontalListItem = styled.li`
  margin: 0px 20px 0px 20px;
`;

const Nav = () => (
  <Wrapper>
    <HorizontalList>
      <HorizontalListItem>Work Samples</HorizontalListItem>
      <HorizontalListItem>About</HorizontalListItem>
      <HorizontalListItem>Contact</HorizontalListItem>
    </HorizontalList>
  </Wrapper>
);

export default Nav;
