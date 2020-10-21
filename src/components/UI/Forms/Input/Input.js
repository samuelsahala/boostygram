import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  position: relative;
  &:last-of-type {
    margin-bottom: 4rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--color-whiteColor);
  color: var(--color-textColor);
  border: 1px solid var(--color-shadow);
  font-size: 1.2rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-shadow);
  }
  :hover {
    border: 1px solid var(--color-mainLight);
  }
`;

const StyledError = styled.div`
  color: var(--color-errorRed);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.2s;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0rem 2rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <StyledError show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </StyledError>
    </InputWrapper>
  );
};

export default Input;
