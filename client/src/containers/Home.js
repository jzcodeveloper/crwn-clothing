import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import MenuDirectory from "../components/MenuDirectory";
import Spinner from "../components/Spinner";

import { fetchSectionsRequest } from "../store/directory/directoryActions";
import { selectDirectoryLoading } from "../store/directory/directorySelectors";

const Container = styled.div`
  width: 100%;
`;

const Home = () => {
  const loading = useSelector(selectDirectoryLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectionsRequest());
  }, []);

  return (
    <Container>
      {loading ? <Spinner /> : <MenuDirectory></MenuDirectory>}
    </Container>
  );
};

export default Home;
