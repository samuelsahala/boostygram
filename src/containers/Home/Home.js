import React from "react";
import Hero from "../../components/Hero/Hero";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import Heading from "../../components/UI/Headings/Heading";
import LoginSVG from "../../assets/Images/login.svg";
import SelectionSVG from "../../assets/Images/selection.svg";
import EnjoySVG from "../../assets/Images/social_life.svg";

const HeroWrapper = styled.div`
  padding-top: 6rem;
`;

const LoginSVGWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${LoginSVG});
  background-repeat: no-repeat, repeat;
`;
const SelectionSVGWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${SelectionSVG});
  background-repeat: no-repeat, repeat;
`;
const EnjoySVGWrapper = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${EnjoySVG});
  background-repeat: no-repeat, repeat;
`;

const Home = () => {
  return (
    <HeroWrapper>
      <Hero />
      <Row middle="xs">
        <Col xs={12}>
          <Row center="xs">
            <Heading noMargin size="h3">
              How It Works?
            </Heading>
          </Row>
          <Row center="xs">
            <Heading size="h2">
              By following the processes below you can make any order you want.
            </Heading>
          </Row>
          <Row around="xs" middle="xs">
            <Col xs={2}>
              <Row center="xs">
                <LoginSVGWrapper />
                <Heading size="h3">
                  Creating an account is the first step, then you need to log
                  in.
                </Heading>
              </Row>
            </Col>
            <Col xs={2}>
              <Row center="xs">
                <SelectionSVGWrapper />
                <Heading size="h3">
                  Select the services you want and get ready to receive more
                  publicity.
                </Heading>
              </Row>
            </Col>
            <Col xs={2}>
              <Row center="xs">
                <EnjoySVGWrapper />
                <Heading size="h3">
                  You can enjoy incredible results when your order is complete.
                </Heading>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </HeroWrapper>
  );
};

export default Home;
