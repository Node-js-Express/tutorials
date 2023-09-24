import express from 'express';

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(8080, () => {
  console.log('server is listening on port 8080....')
})

