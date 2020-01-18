import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from "../store/cart/cartActions";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #777;
`;

const Image = styled.img`
  max-width: 23%;
  padding-right: 20px;
`;

const Name = styled.span`
  width: 23%;
  text-align: left;
  font-size: 1.3em;
`;

const Quantity = styled.span`
  width: 23%;
  text-align: left;
  font-size: 1.3em;
`;

const Price = styled.span`
  width: 23%;
  text-align: left;
  font-size: 1.3em;
`;

const Remove = styled.div`
  width: 8%;
  text-align: center;
`;

const Decrement = styled.span`
  cursor: pointer;
  margin-right: 10px;
`;

const Increment = styled.span`
  cursor: pointer;
  margin-left: 10px;
`;

const RemoveIcon = styled.span`
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
`;

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;

  const dispatch = useDispatch();

  return (
    <Container>
      <Image src={imageUrl} />
      <Name>{name}</Name>
      <Quantity>
        <Decrement onClick={() => dispatch(removeItemFromCart(item))}>
          &#10094;
        </Decrement>
        {quantity}
        <Increment onClick={() => dispatch(addItemToCart(item))}>
          &#10095;
        </Increment>
      </Quantity>
      <Price>${price}</Price>
      <Remove>
        <RemoveIcon onClick={() => dispatch(clearItemFromCart(item))}>
          &#10005;
        </RemoveIcon>
      </Remove>
    </Container>
  );
};

export default CheckoutItem;
