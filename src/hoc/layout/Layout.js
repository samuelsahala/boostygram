import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-6rem);
  margin-top: 6rem; // same as our navbar
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const Layout = ({ children }) => (
  <>
    <Navbar />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
