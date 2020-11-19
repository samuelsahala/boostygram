import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  color: var(--color-whiteColor);
  display: flex;
  align-self: center;
  font-size: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Tomorrow", sans-serif;
`;

const Logo = () => {
  return <LogoWrapper>BOOSTYGRAM</LogoWrapper>;
};

export default Logo;
