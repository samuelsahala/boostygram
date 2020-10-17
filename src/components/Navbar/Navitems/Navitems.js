import React from "react";
import NavItem from "./Navitem/Navitem";
import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
`;

const UlStyle = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Navitems = () => {
  return (
    <NavStyle>
      <UlStyle>
        <NavItem>Home</NavItem>
        <NavItem>Link1</NavItem>
        <NavItem>Link2</NavItem>
      </UlStyle>
    </NavStyle>
  );
};

export default Navitems;
