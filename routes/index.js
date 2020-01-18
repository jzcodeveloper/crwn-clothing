const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();

app.post("/payment", async (req, res) => {
  try {
    const { token, amount } = req.body;

    const body = {
      source: token.id,
      amount,
      currency: "usd"
    };

    const response = await stripe.charges.create(body);

    res.status(200).json({ ok: true, data: response });
  } catch (error) {
    res.status(500).json({ ok: false, error });
    console.log(error);
  }
});

module.exports = app;
