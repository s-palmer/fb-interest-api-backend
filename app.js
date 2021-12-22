const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/search', async (req, res) => {
  const apiSearch = new Searcher,
  const results = await apiSearch.search(req.body.query)
  
  res.send({results: results})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})