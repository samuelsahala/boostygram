import React from "react";
import styled from "styled-components";
import LogoGIF from "../../assets/Images/logoGIF.gif";
import { Row, Col } from "react-flexbox-grid";
import Heading from "../UI/Headings/Heading";

const FooterWrapper = styled.div`
  display: block;
  position: fixed;
  background-color: black;
  bottom: 0;
  padding: 0rem 2rem;
  left: 0;
  width: 100%;
  height: 20rem;
`;

const LogoGIFWrapper = styled.img`
  height: 204px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Row middle="xs">
        <Col>
          <LogoGIFWrapper src={LogoGIF} />
        </Col>
        <Col xs>
          <Row>
            <Heading size="h3" color="whiteColor">
              All user information is kept 100% private and will NOT be shared
              with anyone.
            </Heading>
            <Heading size="h3" color="whiteColor">
              Always remember, you are protected with our - Most trusted
              instagram service.
            </Heading>
          </Row>
        </Col>
        <Col xs>
          <Row end="xs">
            <Heading size="h3" color="whiteColor">
              samuelsahala@gmail.com
            </Heading>
          </Row>
        </Col>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
