const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const apiSearch = require('./src/apiSearch')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/search', async (req, res) => {
  console.log('Got body:', req.body);
  const searchResults = await apiSearch(req.body.query);
  
  res.send({results: searchResults})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})