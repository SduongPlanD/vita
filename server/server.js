const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const db = require('../database/database.js');

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/meals', db.getMeals);

app.post('/addMeal', db.addMeal);

app.listen(process.env.PORT || 8080);