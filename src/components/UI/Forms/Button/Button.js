import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  padding: 1.2rem 2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-whiteColor);
  background-color: var(--color-mainLighter);
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  border: none;
  transition: all 0.2s;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
