import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import {
  googleSignInRequest,
  emailSignInRequest
} from "../store/user/userActions";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;

  @media screen and (min-width: 800px) {
    width: 40%;
    margin-bottom: 0;
  }
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

const initialState = { email: "", password: "" };

const SignIn = () => {
  const [state, setState] = useState(initialState);

  const { email, password } = state;

  const dispatch = useDispatch();

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(emailSignInRequest({ email, password }));

    setState({ ...initialState });
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
        <FormButton type="submit" color1="#000000" color2="#ffffff">
          Sign In
        </FormButton>
        <FormButton
          type="button"
          color1="#428bca"
          color2="#ffffff"
          onClick={() => dispatch(googleSignInRequest())}
        >
          Sign In With Google
        </FormButton>
      </Buttons>
    </Form>
  );
};

export default SignIn;
