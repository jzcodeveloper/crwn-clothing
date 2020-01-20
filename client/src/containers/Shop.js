import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../components/Spinner";

import { fetchCollectionsRequest } from "../store/shop/shopActions";
import { selectShopLoading } from "../store/shop/shopSelectors";

const CollectionOverview = lazy(() => {
  return import("../components/CollectionOverview");
});

const Collection = lazy(() => {
  return import("./Collection");
});

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
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/shop" component={CollectionOverview} />
            <Route exact path="/shop/:collection" component={Collection} />
          </Switch>
        </Suspense>
      )}
    </Container>
  );
};

export default Shop;
