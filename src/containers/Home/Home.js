import React from "react";
import Hero from "../../components/Hero/Hero";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import Heading from "../../components/UI/Headings/Heading";
import LoginSVG from "../../assets/Images/login.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import SelectionSVG from "../../assets/Images/selection.svg";
import EnjoySVG from "../../assets/Images/social_life.svg";

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

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8rem;
`;

const CheckSquare = <FontAwesomeIcon icon={faCheckSquare} />;

const Home = () => {
  return (
    <Row around="xs">
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <Row>
        <Col xs>
          <Row center="xs">
            <Heading noMargin size="h3">
              HOW IT WORKS?
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
      <Row>
        <Col xs>
          <Row center="xs">
            <Heading noMargin size="h2">
              WHY CHOOSE US?
            </Heading>
          </Row>
          <Row around="xs">
            <Col xs={3}>
              <Row>
                <Heading size="h2">{CheckSquare} Real Followers</Heading>
                <Heading size="h3" noMargin>
                  Social Boost attract real followers that like, comment and
                  engage with your content.
                </Heading>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Heading size="h2">{CheckSquare} Safe & Secure</Heading>
                <Heading size="h3" noMargin>
                  We don't use bots or automation. Keeping you 100% compliant
                  with Instagram Terms of Service
                </Heading>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Heading size="h2">
                  {CheckSquare} Real Instagram Marketers
                </Heading>
                <Heading size="h3" noMargin>
                  Our team are hand-picked and trained in the latest Instagram
                  Growth Strategies.
                </Heading>
              </Row>
            </Col>
          </Row>
          <Row around="xs">
            <Col xs={3}>
              <Row>
                <Heading size="h2">{CheckSquare} Advanced Optimization</Heading>
                <Heading size="h3" noMargin>
                  Our in-house Data Scienist tracks and optimizes your targeting
                  to constantly improve results.
                </Heading>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Heading size="h2">{CheckSquare} Analytics & Reports</Heading>
                <Heading size="h3" noMargin>
                  We deliver weekly handmade reports to help your understand
                  your campaigns performance.
                </Heading>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Heading size="h2">{CheckSquare} Handmade Growth</Heading>
                <Heading size="h3" noMargin>
                  Our Marketing is done by hand, using real people and real
                  devices.
                </Heading>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default Home;
