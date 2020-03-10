const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vita',
  password: 'Password1!',
  port: 5432,
})

const getMeals = (request, response) => {
  pool.query('SELECT * FROM meals', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addMeal = (request, response) => {
  const { name, calories, fat, carbohydrates, protein } = request.body
  console.log(request.body)
  pool.query('INSERT INTO meals (name, calories, fat, carbohydrates, protein) VALUES ($1, $2, $3, $4, $5)', [name, calories, fat, carbohydrates, protein], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Meal added with ID: ${results.insertId}`)
  })
}

module.exports = {
  getMeals,
  addMeal,
}