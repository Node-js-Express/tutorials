import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/api/products', (req, res) => {
  res.send('Products');
});
app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080....');
});

/**
 * morgan('tiny')를 통해서 request 메시지에 대해서 야무지게 출력해줍니다.
 * app.use에 대해서 path를 따로 설정하지 않았기 때문에, 모든 요청에 대해서 적용해줍니다.
 */