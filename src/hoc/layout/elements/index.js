import styled from "styled-components";
import { Form } from "formik";

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 1rem;
  padding: 8rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
