import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectShopCollection } from "../store/shop/shopSelectors";

import CollectionItem from "../components/CollectionItem";

const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0 30px 30px 30px;
  font-size: 3em;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
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

export default Collection;
