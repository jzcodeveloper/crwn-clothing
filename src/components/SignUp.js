import React, { useState, useContext } from "react";
import styled from "styled-components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import { UserContext } from "../store/contexts/userContext";
import { auth, createUserProfileDocument } from "../firebase/utils";

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
`;

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = state;

  const { setCurrentUser } = useContext(UserContext);

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName: name });

        setCurrentUser(user);

        setState({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      } catch (error) {
        console.log(error);
      }
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
        <FormButton color="black">Sign Up</FormButton>
      </Buttons>
    </Form>
  );
};

export default SignUp;
