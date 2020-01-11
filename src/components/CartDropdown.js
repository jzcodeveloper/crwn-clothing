import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectCartItems } from "../store/cart/cartSelectors";
import { toggleCart } from "../store/cart/cartActions";

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

const EmptyMessage = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  text-align: center;
  font-size: 1.3em;
`;

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);

  const onClick = e => {
    dispatch(toggleCart());
    history.push("/checkout");
  };

  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <FormButton type="button" color="#000000" onClick={onClick}>
        Go To Checkout
      </FormButton>
    </Container>
  );
};

export default CartDropdown;
