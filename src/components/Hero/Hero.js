import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import socialGirlSVG from "../../assets/Images/social_girl_hero.svg";
import Heading from "../../components/UI/Headings/Heading";

const SocialGirlSVG = styled.div`
  height: 40rem;
  display: flex;
  background-image: url(${socialGirlSVG});
  background-repeat: no-repeat, repeat;
`;

const Hero = () => {
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      justify="space-around"
      align="middle"
    >
      <Col flex={2}>
        <Heading size="h1">Welcome to Boostygram</Heading>
        <Heading size="h3">
          Get hundreds of High Quality Social Media Services in a distance of a
          click.
        </Heading>
      </Col>
      <Col justify="end" flex={3}>
        <SocialGirlSVG />
      </Col>
    </Row>
  );
};

export default Hero;
