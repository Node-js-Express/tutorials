import express from 'express';
import { products } from '../data.js'; // products 데이터를 가져옵니다.

const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  console.log(req.params)
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  console.log(req.params)
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080....');
});

/**
 * 이 예제에서 가져오는 값들은 data.js라는 파일에서 가져오는 겁니다.
 * /api/products/:productID에서 :뒤에 있는 값은 라우트 매개변수 입니다.
 * :productID라고 선언했으므로, URL에서 값을 받아서 req.params에 정의된다고 생각하시면 됩니다.
 */