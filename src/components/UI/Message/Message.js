import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(error, success) => {
    if (error) return "var(--color-errorRed)";
    if (success) return "green";
    else return "var(--color-main)";
  }};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "40px" : "0px")});
  transition: all 0.2s;
  text-align: center;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <StyledP error={error} success={success} show={show}>
      {children}
    </StyledP>
  );
};

export default Message;
