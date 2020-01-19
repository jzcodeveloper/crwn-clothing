import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import CollectionOverview from "../components/CollectionOverview";
import Collection from "./Collection";
import Spinner from "../components/Spinner";

import { fetchCollectionsRequest } from "../store/shop/shopActions";
import { selectShopLoading } from "../store/shop/shopSelectors";

const Container = styled.div``;

const Shop = () => {
  const loading = useSelector(selectShopLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsRequest());
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Switch>
          <Route exact path="/shop" component={CollectionOverview} />
          <Route exact path="/shop/:collection" component={Collection} />
        </Switch>
      )}
    </Container>
  );
};

export default Shop;
