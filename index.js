var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

var peanuts = [
  { name: 'salted', cost: 2.5 },
  { name: 'dry roasted', cost: 3.5 }
]
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/peanuts', function (req, res) {
  res.json(peanuts)
})

app.post('/peanuts', function (req, res) {
  var newPeanut = {
    name: req.body.name,
    cost: req.body.cost
  }
  peanuts.push(newPeanut)
  setTimeout(function () {
    res.json(newPeanut)
  }, 3000)
})

app.delete('/peanuts/:id', function (req, res) {
  peanuts.splice(req.params.id,1)
  res.json({message: 'success'})
})

app.listen(3000, () => {
  console.log('Server Listening on port 3000')
})
