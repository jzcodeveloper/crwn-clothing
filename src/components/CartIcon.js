import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { ReactComponent as Icon } from "../assets/cart-icon.svg";
import { toggleCart } from "../store/actions/cartActions";

const Container = styled.div`
  display: inline;
  position: relative;

  & svg {
    cursor: pointer;
  }
`;

const Count = styled.span`
  position: absolute;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1px;
  right: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: -10;
`;

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Icon onClick={() => dispatch(toggleCart())} />
      <Count>0</Count>
    </Container>
  );
};

export default CartIcon;
