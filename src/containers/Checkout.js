import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import {
  selectCartItems,
  selectCartItemsPrice
} from "../store/cart/cartSelectors";

import CheckoutItem from "../components/CheckoutItem";

const Container = styled.div`
  min-width: 700px;
  width: 55%;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #777;
`;

const Title = styled.span`
  font-size: 1.2em;
  padding: 15px 0;
  text-align: left;
  width: 23%;

  &:last-child {
    width: 8%;
    text-align: center;
  }
`;

const Total = styled.div`
  text-align: right;
  text-transform: uppercase;
  font-size: 3em;
  margin: 20px 0;
`;

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartItemsPrice);

  return (
    <Container>
      <Header>
        <Title>Product</Title>
        <Title>Description</Title>
        <Title>Quantity</Title>
        <Title>Price</Title>
        <Title>Remove</Title>
      </Header>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>Total: ${total}</Total>
    </Container>
  );
};
export default Checkout;
