import React from "react";
import styled from "styled-components";

import MenuDirectory from "../components/MenuDirectory";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <MenuDirectory></MenuDirectory>
    </Container>
  );
};

export default Home;
