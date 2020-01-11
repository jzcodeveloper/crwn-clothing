import React from "react";
import styled from "styled-components";

import CollectionItem from "./CollectionItem";

const Container = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const Title = styled.h1`
  margin: 0 0 20px 0;
`;

const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

const CollectionPreview = ({ title, items }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </Preview>
    </Container>
  );
};

export default CollectionPreview;
