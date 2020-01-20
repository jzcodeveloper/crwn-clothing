import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import CollectionItem from "./CollectionItem";

const Container = styled.div`
  width: 100%;
`;

const Title = styled(Link)`
  display: block;
  font-weight: bold;
  font-size: 2em;
  margin: 0 0 20px 0;

  &:hover {
    opacity: 0.7;
  }
`;

const Preview = styled.div`
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

const CollectionPreview = ({ title, items }) => {
  return (
    <Container>
      <Title to={`/shop/${title.toLowerCase()}`}>{title}</Title>
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

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CollectionPreview;
