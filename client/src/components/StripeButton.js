import React from "react";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "../store/axios";

const Container = styled.div`
  text-align: right;
  margin: 30px 0 40px 0;
`;

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_qgGSFrBqmQNBiSlt2z7k0tHT00XrlQymyc";

  const onToken = async token => {
    try {
      const body = { token, amount: stripePrice };

      const res = await axios.post("/payment", body);

      console.log(res);
      alert("Payment successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={stripePrice}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      ></StripeCheckout>
    </Container>
  );
};

StripeButton.propTypes = {
  price: PropTypes.number.isRequired
};

export default StripeButton;
