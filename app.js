const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

//eslint-disable-next-line no-unused-vars
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.get("test", (req, res) => {
  
})

app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
