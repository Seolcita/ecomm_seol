/** @format */

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51K1JOkEtRHwOqOR019DJvp9uDzMeN6zbZy9K93qkhhDlr3J7E1jI8BpD6cJEOKiWzyBxLTKvh0pB9BAURgOEc9g800cmyeTsoM'
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('hello world'));
app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  console.log('TOTAL', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'cad',
  });

  // status(201) >> OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// --- Firebase Emulator ---
// In terminal,
// 1. Type >> firebase emulators:start
// 2. Get example end point >> ex) http://localhost:5001/ecomm-seol/us-central1/api
// 3. Get local server(in the table) >> ex) http://localhost:4000/functions

// --- Deploy Backend ---
// In terminal, type below
// firebase deploy --only functions
