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

const Navitems = ({ loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <UlStyle>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/orders">Orders</NavItem>
        <NavItem link="/logout">Logout</NavItem>
      </UlStyle>
    );
  } else {
    links = (
      <UlStyle>
        <NavItem link="/">Home</NavItem>
        <NavItem link="/Login">Login</NavItem>
        <NavItem link="/Signup">Signup</NavItem>
      </UlStyle>
    );
  }
  return <NavStyle>{links}</NavStyle>;
};

export default Navitems;
