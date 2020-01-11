import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { ReactComponent as Icon } from "../assets/cart-icon.svg";
import { toggleCart } from "../store/cart/cartActions";
import { selectCartItemsQuantity } from "../store/cart/cartSelectors";

const Container = styled.div`
  display: inline;
  position: relative;

  & svg {
    cursor: pointer;
  }
`;

const Quantity = styled.span`
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

  const quantity = useSelector(selectCartItemsQuantity);

  return (
    <Container>
      <Icon onClick={() => dispatch(toggleCart())} />
      <Quantity>{quantity}</Quantity>
    </Container>
  );
};

export default CartIcon;
