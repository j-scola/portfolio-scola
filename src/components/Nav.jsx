import React from 'react';
import styled from 'styled-components';
// import { Link, useRouteMatch } from 'react-router-dom';

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

const Nav = () => {
  const match = 'insert routeMatch'; // useRouteMatch();
  return (
    <Wrapper>
      <HorizontalList>
        <HorizontalListItem>Work Samples</HorizontalListItem>
        <HorizontalListItem>About</HorizontalListItem>
        <HorizontalListItem>Contact</HorizontalListItem>
      </HorizontalList>
    </Wrapper>
  );
};
export default Nav;

/*
  <Wrapper>
    <HorizontalList>
      <HorizontalListItem>
          <Link to={`${match.url}/work-samples`}>Work Samples</Link>
        </HorizontalListItem>
        <HorizontalListItem>
          <Link to={`${match.url}/about`}>About</Link>
        </HorizontalListItem>
        <HorizontalListItem>
          <Link to={`${match.url}/contact`}>Contact</Link>
        </HorizontalListItem>
    </HorizontalList>
  </Wrapper>
  */
