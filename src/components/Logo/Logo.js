import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  color: var(--color-whiteColor);
  display: flex;
  align-self: center;
  font-weight: bold;
  font-size: 2rem;
  padding: 1rem;
`;

const Logo = () => {
  return <LogoWrapper>Boostygram</LogoWrapper>;
};

export default Logo;
