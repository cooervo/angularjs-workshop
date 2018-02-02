const express = require('express')
const app = express()
let database = require('./database')


app.get('/todo', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(database)
})

let portNum = 3000
app.listen(portNum, () => console.log(`Server listening on port ${portNum}`))