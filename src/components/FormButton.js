import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.color};
  font-size: 1.1em;
  color: white;
  padding: 15px;
  margin: 20px 10px;
  outline: 0;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
  }
`;

const FormButton = ({ children, ...otherProps }) => {
  return (
    <Button color={otherProps.color} {...otherProps}>
      {children}
    </Button>
  );
};

export default FormButton;
