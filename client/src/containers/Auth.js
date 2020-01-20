import React from "react";
import styled from "styled-components";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  @media screen and (min-width: 800px) {
    flex-flow: row;
  }
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
