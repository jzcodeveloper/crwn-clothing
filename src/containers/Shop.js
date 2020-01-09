import React, { useState } from "react";
import styled from "styled-components";

import collections from "../data/collections";

import CollectionPreview from "../components/CollectionPreview";

const Container = styled.div``;

const Shop = () => {
  const [state] = useState({ collections });

  return (
    <Container>
      {state.collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </Container>
  );
};

export default Shop;
