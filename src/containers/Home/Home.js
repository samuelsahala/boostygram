import React from "react";
import Hero from "../../components/Hero/Hero";
import { Row, Col } from "antd";

const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <Hero />
      </Col>
    </Row>
  );
};

export default Home;
