import React from "react";
import styled from "styled-components";

import FormButton from "./FormButton";

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 10px;
  height: 400px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  & button {
    display: none;
    position: absolute;
    bottom: 50px;
    left: 12px;
    width: 80%;
    background-color: white;
    opacity: 0.8;
    font-size: 1.3em;
    font-weight: bold;

    & button:hover {
      background-color: black;
      color: white;
    }
  }

  &:hover button {
    display: block;
    cursor: pointer;
  }
`;

const BackgroundImage = styled.div`
  height: 95%;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;

  ${Container}:hover & {
    opacity: 0.7;
  }
`;

const Footer = styled.div`
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  font-size: 1.4em;
`;

const Price = styled.span`
  font-size: 1.4em;
`;

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <FormButton type="button" color="#000">
        Add To Cart
      </FormButton>
    </Container>
  );
};

export default CollectionItem;
