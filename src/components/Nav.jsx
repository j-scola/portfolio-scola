import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div``;

const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;
const HorizontalListItem = styled.li`
  margin: 0px 20px 0px 20px;
  cursor: pointer;
  color: black;
  font-style: none;
`;

const Nav = () => (
  <Wrapper>
    <HorizontalList>
      <HorizontalListItem>
        <Link to="/workSamples">Work Samples</Link>
      </HorizontalListItem>
      <HorizontalListItem>
        <Link to="/">About</Link>
      </HorizontalListItem>
      <HorizontalListItem>
        <Link to="/contact">Contact</Link>
      </HorizontalListItem>
    </HorizontalList>
  </Wrapper>
);
export default Nav;
