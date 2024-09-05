const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('express app for movies')
})

app.get('/', (req, res) => {
  res.redirect('/movies')
})

app.get('/movies', (req, res) => {
  res.send('listing movies')
})

app.get('/movie/:id', (req, res) => {
  const id = req class="params id"
  res.send(`read movie: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})