const express = require('express')
const app = express()
const path = require('path');
let database = require('./database')

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../.')));

app.get('/', (req, res) => {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Methods", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})


app.get('/todo', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(database)
})

let portNum = 3000
app.listen(portNum, () => console.log(`Server listening on: http://localhost:${portNum}`))