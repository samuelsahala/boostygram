import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("The email is required."),
  password: Yup.string().required("The password is required."),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <h1>Login</h1>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Button type="submit">Login</Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
