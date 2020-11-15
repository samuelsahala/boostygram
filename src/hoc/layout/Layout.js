import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
`;

const LayoutUI = ({ children, loggedIn }) => (
  <>
    <Navbar loggedIn={loggedIn} />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </>
);
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(LayoutUI);
