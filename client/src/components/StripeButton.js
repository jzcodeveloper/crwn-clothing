import React from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
  text-align: right;
  margin: 30px 0 40px 0;
`;

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_qgGSFrBqmQNBiSlt2z7k0tHT00XrlQymyc";

  const onToken = token => {
    console.log(token);
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
export default StripeButton;
