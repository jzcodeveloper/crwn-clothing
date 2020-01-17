import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import CollectionOverview from "../components/CollectionOverview";
import Spinner from "../components/Spinner";

import { firestore, convertCollectionsSnapshotToMap } from "../firebase/utils";
import { selectShopLoading } from "../store/shop/shopSelectors";
import {
  updateCollections,
  updateCollectionsStart,
  updateCollectionsEnd
} from "../store/shop/shopActions";

const Container = styled.div``;

const Shop = () => {
  const loading = useSelector(selectShopLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      dispatch(updateCollectionsStart());

      const collections = convertCollectionsSnapshotToMap(snapshot);

      dispatch(updateCollections(collections));
      dispatch(updateCollectionsEnd());
    });

    return () => unsubscribeFromSnapshot();
  }, []);

  return (
    <Container>{loading ? <Spinner /> : <CollectionOverview />}</Container>
  );
};

export default Shop;
