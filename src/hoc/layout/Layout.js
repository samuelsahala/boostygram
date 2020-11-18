import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const MainWrapper = styled.div`
  width: 100%;
  /* padding: 6rem; */
  min-height: calc(100vh-6rem);
  margin-top: 6rem;
  margin-bottom: 20rem;
`;

const LayoutUI = ({ children, loggedIn }) => (
  <>
    <Navbar loggedIn={loggedIn} />
    <MainWrapper>
      <Grid fluid>
        <Row>
          <Col xs>{children}</Col>
        </Row>
      </Grid>
    </MainWrapper>
    <Footer />
  </>
);
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(LayoutUI);
