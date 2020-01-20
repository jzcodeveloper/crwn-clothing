import React from "react";
import styled from "styled-components";

import NotFoundImage from "../assets/404.png";

const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 134px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  background-size: cover;
  background-position: center;
`;

const Text = styled.h1`
  color: #2f8e89;
  margin: 30px 10px;
`;

const NotFound = () => (
  <Overlay>
    <Image src={NotFoundImage} />
    <Text>Sorry, this page is broken.</Text>
  </Overlay>
);

export default NotFound;
