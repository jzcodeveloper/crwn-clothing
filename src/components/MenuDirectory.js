import React, { useState } from "react";
import styled from "styled-components";

import sections from "../data/sections";

import MenuItem from "../components/MenuItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 40px;
`;

const MenuDirectory = () => {
  const [state] = useState({ sections });

  return (
    <Container>
      {state.sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </Container>
  );
};

export default MenuDirectory;
