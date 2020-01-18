import React from "react";
import styled from "styled-components";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-around;
`;

const Auth = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Auth;
