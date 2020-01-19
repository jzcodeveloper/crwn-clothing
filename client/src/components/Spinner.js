import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 134px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.div`
  padding: 40px;
  border-radius: 50%;
  border-left: 5px solid #ddd;
  border-top: 5px solid #ddd;
  border-bottom: 5px solid #ddd;
  border-right: 5px solid ${props => props.color};
  background-color: transparent;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotateZ(-90deg);
    }
    100% {
      transform: rotateZ(270deg);
    }
  }
`;

const Spinner = ({ color }) => (
  <Overlay>
    <Container color={color} />
  </Overlay>
);

Spinner.propTypes = {
  color: PropTypes.string
};

Spinner.defaultProps = {
  color: "#777"
};

export default Spinner;
