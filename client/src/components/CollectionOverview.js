import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectShopCollectionsForPreview } from "../store/shop/shopSelectors";

import CollectionPreview from "../components/CollectionPreview";

const Container = styled.div``;

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);

  return (
    <Container>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </Container>
  );
};

export default CollectionOverview;
