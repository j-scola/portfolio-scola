import React from 'react';
import styled from 'styled-components';

const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;
const HorizontalListItem = styled.li`
  margin: 0px 20px 0px 20px;
`;

const Contact = () => (
  <div>
    <HorizontalList>
      <HorizontalListItem>
        <a href="https://github.com/j-scola">@j-scola on github</a>
      </HorizontalListItem>
      <HorizontalListItem>
        {' '}
        <a href="https://linkedin.com/in/james-scolamieri">linkedin profile</a>
      </HorizontalListItem>
    </HorizontalList>
  </div>
);

export default Contact;
