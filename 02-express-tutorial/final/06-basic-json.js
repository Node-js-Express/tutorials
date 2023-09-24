import express from 'express';
import { products } from '../data.js';

const app = express();

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080....');
});
