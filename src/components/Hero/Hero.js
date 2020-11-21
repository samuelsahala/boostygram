import React from "react";
import styled from "styled-components";
import UploadSVG from "../../assets/Images/updateH.svg";
import Heading from "../../components/UI/Headings/Heading";
import { Grid, Row, Col } from "react-flexbox-grid";

const UploadSVGWrapper = styled.div`
  height: 40rem;
  margin: auto;
  right: 100px;
  z-index: -100;
  background-image: url(${UploadSVG});
  background-repeat: no-repeat, repeat;
`;

const Hero = () => {
  return (
    <Row middle="xs">
      <Col>
        <Heading size="h1" noMargin>
          Boostygram
        </Heading>
        <Heading size="h2">World Best Instegram Service Provider</Heading>
        <Heading size="h3">
          Fully Automated Instant reliable instegram service. Free Followers
          Views and Likes in a click of a button.
        </Heading>
      </Col>
      <Col xs>
        <UploadSVGWrapper />
      </Col>
    </Row>
  );
};

export default Hero;
