import React, { useState } from "react";
import styled from "styled-components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import { auth, signInWithGoogle } from "../firebase/utils";

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-flow: column;
`;

const Title = styled.h1`
  margin: 10px 0;
`;

const Subtitle = styled.span`
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  & button:first-child {
    width: 45%;
    margin-left: 0;
  }

  & button:last-child {
    width: 55%;
    margin-right: 0;
  }
`;

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const { email, password } = state;

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>I already have an account</Title>
      <Subtitle>Sign in with your email and password.</Subtitle>
      <FormInput
        onChange={onChange}
        name="email"
        type="email"
        label="Email"
        value={email}
        required
      ></FormInput>
      <FormInput
        onChange={onChange}
        name="password"
        type="password"
        label="Password"
        value={password}
        required
      ></FormInput>
      <Buttons>
        <FormButton type="submit" color="#000000">
          Sign In
        </FormButton>
        <FormButton type="button" color="#428bca" onClick={signInWithGoogle}>
          Sign In With Google
        </FormButton>
      </Buttons>
    </Form>
  );
};

export default SignIn;
