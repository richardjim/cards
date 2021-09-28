
const express = require("express");
const bodyParser = require('body-parser');
const {Card, Task} = require('sequelize');

const sequelize = require("./util/database");
//const dba = require('./config/database');

// Test DB
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
   .catch(err => console.log('Error: ' + err))

const app = express()
app.use(bodyParser.json())

//create card
app.post('/api/cards',(req,res) =>{
    Card.create(req.body)
    .then(cards=>res.json(cards))
})
//get all card
app.get('/api/cards',(req,res)=> {
    Card.findAll().then(cards=> res.json(cards))
})

//create task
app.post('/api/task',(req,res) =>{
    const body = req.body

})
//api endpoint 
const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Running on http://localhost:${PORT}`)
})



