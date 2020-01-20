import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectDirectorySections } from "../store/directory/directorySelectors";

import MenuItem from "../components/MenuItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const MenuDirectory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <Container>
      {sections.map(section => (
        <MenuItem key={section.id} section={section}></MenuItem>
      ))}
    </Container>
  );
};

export default MenuDirectory;
