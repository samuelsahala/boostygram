import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  color: ${({ color }) =>
    color === "whiteColor"
      ? "var(--color-whiteColor)"
      : "var(--color-mainLighter)"};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "2rem")};
`;

const HeadingOne = styled.h1`
  font-size: 2.5rem;
  ${baseStyle}
`;
const HeadingTwo = styled.h1`
  font-size: 1.5rem;
  ${baseStyle}
`;
const HeadingThree = styled.h1`
  font-size: 1rem;
  ${baseStyle}
`;

function Heading({ children, color, noMargin, size }) {
  if (size === "h1")
    return (
      <HeadingOne noMargin={noMargin} color={color}>
        {children}
      </HeadingOne>
    );

  if (size === "h2")
    return (
      <HeadingTwo noMargin={noMargin} color={color}>
        {children}
      </HeadingTwo>
    );

  if (size === "h3")
    return (
      <HeadingThree noMargin={noMargin} color={color}>
        {children}
      </HeadingThree>
    );
}

export default Heading;
