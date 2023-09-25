import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const app = express();

// setup static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(8080, () => {
  console.log('server is listening on port 8080....');
});

/**
 * app.get은 특정 url에 오는 요청 중에 get method에 대해서 처리하는 미들웨어입니다.
 * app.all은 특정 url에 오는 요청의 모든 http method에 대해서 처리하는 미들웨어입니다.
 * app.listen은 해당 port에서 express.js 애플리케이션을 실행한다는 뜻입니다.
 * 
 * (path.resolve(__dirname, './navbar-app/index.html')은 
 * 현재 스크립트 파일의 디렉터리에서 ./navbar-app/index.html 파일의 절대 경로를 생성하는 겁니다.
 * 즉 경로를 설정하는 로직입니다.
 * 
 * res.status를 통해서 request 상태코드도 설정해서 넣을 수 있습니다.
 */