import React from "react";
import styled from "styled-components";

import FormButton from "./FormButton";

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
  height: 300px;
`;

const CartDropdown = () => {
  return (
    <Container>
      <CartItems></CartItems>
      <FormButton type="button" color="#000000" onClick={() => {}}>
        Go To Checkout
      </FormButton>
    </Container>
  );
};

export default CartDropdown;
