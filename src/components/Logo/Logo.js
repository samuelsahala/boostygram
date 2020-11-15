import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  color: var(--color-whiteColor);
  display: flex;
  align-self: center;
  font-size: 2rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Logo = () => {
  return <LogoWrapper>Boostygram</LogoWrapper>;
};

export default Logo;
