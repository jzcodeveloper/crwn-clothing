import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 30%;
  margin: 10px;
  height: ${props => (props.size === "large" ? "380px" : "250px")};
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  transition: transform 5s linear;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 120px;
  background-color: white;
  opacity: 0.7;
  transition: opacity 0.5s linear;

  ${Container}:hover & {
    opacity: 0.9;
  }
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 1.5em;
  text-transform: uppercase;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 1em;
  text-transform: uppercase;
`;

const MenuItem = ({ title, imageUrl, size }) => {
  const history = useHistory();

  const onClick = e => {
    history.push(`/shop/${title}`);
  };

  return (
    <Container size={size} onClick={onClick}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Content>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </Container>
  );
};

export default MenuItem;
