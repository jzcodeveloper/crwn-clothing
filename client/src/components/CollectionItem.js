import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { deepEqual } from "../utils/utils";

import { addItemToCart } from "../store/cart/cartActions";

import FormButton from "./FormButton";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
`;

const BackgroundImage = styled.div`
  height: calc(95% - 10px);
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;

  @media screen and (min-width: 800px) {
    ${Container}:hover & {
      opacity: 0.7;
    }
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

  & button {
    display: block;
    width: 100%;
    margin: 20px;
    opacity: 0.8;
    font-size: 1.3em;
    font-weight: bold;
  }

  ${Container}:hover & button {
    display: block;
  }

  @media screen and (min-width: 800px) {
    & button {
      display: none;
    }
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

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
  })
};

const areEqual = (prevProps, nextProps) => {
  return deepEqual(prevProps.item, nextProps.item);
};

export default React.memo(CollectionItem, areEqual);
