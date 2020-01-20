import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  text-transform: uppercase;
  background-color: ${props => props.color1};
  font-size: 1.1em;
  color: ${props => props.color2};
  padding: 15px;
  margin: 20px 10px;
  outline: 0;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    background-color: ${props => props.color2};
    color: ${props => props.color1};
    border: 2px solid ${props => props.color1};
  }
`;

const FormButton = ({ children, ...otherProps }) => {
  return (
    <Button
      color1={otherProps.color1}
      color2={otherProps.color2}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  color1: PropTypes.string,
  color2: PropTypes.string
};

FormButton.defaultProps = {
  color1: "#000",
  color2: "#FFF"
};

export default FormButton;
