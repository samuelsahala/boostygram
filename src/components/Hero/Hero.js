import React from "react";
import styled from "styled-components";
import UploadSVG from "../../assets/Images/updateH.svg";
import Heading from "../../components/UI/Headings/Heading";
import { Grid, Row, Col } from "react-flexbox-grid";

const UploadSVGWrapper = styled.div`
  height: 150px;
  width: 300px;
  background-image: url(${UploadSVG});
  background-repeat: no-repeat, repeat;
`;

const Hero = () => {
  return (
    <Row middle="xs" around="xs">
      <Col xs={6}>
        <Heading size="h1" noMargin>
          Boostygram
        </Heading>
        <Heading size="h2">World Best Instegram Service Provider</Heading>
        <Heading size="h3">
          Fully Automated Instant reliable instegram service. Free Followers
          Views and Likes in a click of a button.
        </Heading>
      </Col>
      <Col xs={6}>
        <Row center="xs" middle="xs">
          <Col xs={6}>
            <UploadSVGWrapper />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Hero;
