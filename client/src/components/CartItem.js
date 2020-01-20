import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deepEqual } from "../utils/utils";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Image = styled.img`
  flex: 0.5;
  width: 30%;
`;

const Details = styled.div`
  flex: 1;
  margin: 0px 20px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const Name = styled.span`
  margin: 5px 0;
  font-size: 1.2em;
`;

const Price = styled.span`
  margin: 5px 0;
  font-size: 1.2em;
`;

const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <Container>
      <Image src={imageUrl} />
      <Details>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </Details>
    </Container>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  })
};

const areEqual = (prevProps, nextProps) => {
  return deepEqual(prevProps.item, nextProps.item);
};

export default React.memo(CartItem, areEqual);
