import React from "@libraries/react";
import styled from '@libraries/styled-components';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.span`
  padding: 0px;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5rem;
`;

const NavBar = ({narrativeTitle, sidebar}) => {
  if (!sidebar) return null;
  return (
    <NavBarContainer>
      <Title href="/">
        {"Nextstrain@KRISP"}
      </Title>
      <div style={{minWidth: 10}}/>
    </NavBarContainer>
  );
};

export default NavBar;