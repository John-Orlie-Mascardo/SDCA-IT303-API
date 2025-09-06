import express from 'express'

const app = express()

app.use ('/api/register', (req, res) => {
  res.send ('Sample Register endpoint')
})

app.listen (3000, () => {
  console.log('Server running on port 3000.')
})

