import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Row, Col } from "antd";
const { Header, Content } = Layout;

const LayoutUI = ({ children, loggedIn }) => (
  <Layout>
    <Header>
      <Navbar loggedIn={loggedIn} />
    </Header>
    <Content style={{ height: "90vh" }}>{children}</Content>
    <Footer />
  </Layout>
);
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(LayoutUI);
