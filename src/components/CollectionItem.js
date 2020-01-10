import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addItemToCart } from "../store/actions/cartActions";

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

const Buttons = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 25px;

  & button:first-child {
    display: none;
    width: 100%;
    margin: 20px;
    opacity: 0.8;
    font-size: 1.3em;
    font-weight: bold;
  }

  ${Container}:hover & button:first-child {
    display: block;
  }
`;

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Buttons>
        <FormButton
          type="button"
          color1="#ffffff"
          color2="#000000"
          onClick={() => dispatch(addItemToCart(item))}
        >
          Add To Cart
        </FormButton>
      </Buttons>
    </Container>
  );
};

export default CollectionItem;
