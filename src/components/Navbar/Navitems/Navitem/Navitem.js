import React from "react";
import styled from "styled-components";

const LiStyle = styled.li`
  display: flex;
  height: 100%;
`;
const AStyle = styled.a`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0 1rem;
  font-weight: 400;
  color: var(--color-whiteColor);
  transition: all 0.2s;
  &:hover {
    border-bottom: 2px solid var(--color-mainLight);
  }
`;

const Navitem = ({ link, children }) => {
  return (
    <LiStyle>
      <AStyle href="www.google.co.il">{children}</AStyle>
    </LiStyle>
  );
};

export default Navitem;
