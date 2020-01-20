import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { selectShopCollection } from "../store/shop/shopSelectors";

import CollectionItem from "../components/CollectionItem";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 30px 30px 30px;
  font-size: 3em;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px;

  @media screen and (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Collection = ({ match }) => {
  const collection = useSelector(selectShopCollection(match.params.collection));

  const { title, items } = collection;

  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

Collection.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default Collection;
