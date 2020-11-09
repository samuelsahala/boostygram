import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: fixed;
  background-color: var(--color-mainDark);
  bottom: 0;
  padding: 0rem 2rem;
  left: 0;
  width: 100%;
  height: 10rem;
`;

const Footer = () => {
  return <FooterWrapper>Boostygram</FooterWrapper>;
};

export default Footer;
