require('dotenv/config');
// const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const db = require('../database/database.js');

const PORT = process.env.PORT || 8081;

// app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/meals', db.getMeals);
app.post('/addMeal', db.addMeal);
app.put('/editMeal/:mealId', db.editMeal);
app.delete('/deleteMeal/:mealId', db.deleteMeal);

app.listen(PORT, () => {
  console.log(`Hidey-Ho Capt'n, we are sailing on port ${PORT}`)
});
