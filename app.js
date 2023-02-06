const { urlencoded } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});