import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid #777;
  padding: 15px 5px;
  margin: 20px 0;
  outline: 0;
  font-size: 1.1em;
  background-color: transparent;
`;

const Label = styled.label`
  position: absolute;
  top: 36px;
  left: 5px;
  color: #777;
  font-size: 1.1em;
  transition: all 0.3s ease;
  z-index: -1;

  ${Input}:focus ~ &,
  &.shrink {
    top: 8px;
    color: black;
    font-size: 0.9em;
  }
`;

const FormInput = ({ onChange, label, ...otherProps }) => {
  return (
    <Container>
      <Input onChange={onChange} {...otherProps} />
      <Label className={otherProps.value.length ? "shrink" : ""}>{label}</Label>
    </Container>
  );
};

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FormInput;
