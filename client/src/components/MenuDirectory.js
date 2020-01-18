import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectDirectorySections } from "../store/directory/directorySelectors";

import MenuItem from "../components/MenuItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 40px;
`;

const MenuDirectory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <Container>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </Container>
  );
};

export default MenuDirectory;
