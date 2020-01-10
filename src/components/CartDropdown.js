import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectCartItems } from "../store/selectors/cartSelectors";

import FormButton from "./FormButton";
import CartItem from "./CartItem";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -380px;
  right: 40px;
  width: 300px;
  min-height: 380px;
  border: 2px solid #000;
  z-index: 50;
  background-color: #fff;

  & button {
    margin: 20px;
    width: calc(100% - 40px);
  }
`;

const CartItems = styled.div`
  overflow-y: auto;
  height: 300px;
`;

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <Container>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <FormButton type="button" color="#000000" onClick={() => {}}>
        Go To Checkout
      </FormButton>
    </Container>
  );
};

export default CartDropdown;
