import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  console.log(req)
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

app.listen(8080, () => {
  console.log('server is listening on port 8080...');
});

/**
 * app.get(path, callback)이고, 해당 path는 요청 경로를 나타냅니다.
 * callback에 경우에는 req,res 객체를 인수로 받아 요청을 처리하는 콜백 함수 입니다.
 */