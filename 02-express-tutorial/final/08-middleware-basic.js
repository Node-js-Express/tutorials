import express from 'express';

const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});
app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080....');
});

/**
 * 해당 logger가 get('/')에 대해서 라우팅 함수로 들어가기 전에, logger를 먼저 실행합니다.
 * next()를 통해 제어가 다음 미들웨어 함수로 전달되고, 최종적으로 라우팅 코드로 이동합니다.
 */