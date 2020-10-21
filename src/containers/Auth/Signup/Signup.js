import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required.")
    .min(3, "To Short.")
    .max(25, "Too Long."),
  lastName: Yup.string()
    .required("Last name is required.")
    .min(3, "To Short.")
    .max(25, "Too Long."),
  email: Yup.string().email("Invalid email").required("The email is required."),
  password: Yup.string().required("The password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to cconfirm your password..."),
});

const Signup = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading size="h1">Sign Up</Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
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
            <Field
              type="passowrd"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Login
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Signup;
