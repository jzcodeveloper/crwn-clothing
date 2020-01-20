import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import { signUpRequest } from "../store/user/userActions";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 800px) {
    width: 40%;
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
`;

const initialState = { name: "", email: "", password: "", confirmPassword: "" };

const SignUp = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const { name, email, password, confirmPassword } = state;

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(signUpRequest({ name, email, password }));

      setState({ ...initialState });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>I don't have an account</Title>
      <Subtitle>Sign up with your email and password.</Subtitle>
      <FormInput
        name="name"
        label="Display Name"
        value={name}
        onChange={onChange}
        required
      />
      <FormInput
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={onChange}
        required
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={onChange}
        required
      />
      <FormInput
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={onChange}
        required
      />
      <Buttons>
        <FormButton color1="#000000" color2="#ffffff">
          Sign Up
        </FormButton>
      </Buttons>
    </Form>
  );
};

export default SignUp;
