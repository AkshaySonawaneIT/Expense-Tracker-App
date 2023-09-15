const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const { db } = require('./db/db');
const route = require('./routes/transactions');
const app = express();

// require('dotenv').config();

// const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());


// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));
// app.use('/transaction', transactionRouter);

db();

app.listen(5000, () => console.log("SERVER IS RUNNING...."));