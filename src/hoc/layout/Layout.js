import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-5rem);
  margin-top: 6rem; // same as our navbar
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
