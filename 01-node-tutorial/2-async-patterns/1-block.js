import http from 'http';

/*
해당 파일에 대해서, node 1-block.js로 실행 후 localhost:8080/about를 접근해보면,
바로 About Page가 뜨는 게 아니라, 일정 시간이 지난 후 보입니다.
즉 for문을 돌기 때문에 blocking이 됩니다.

하지만, setTimeout를 통해 비동기적으로 해당 for문을 돌리면, Async Start가 먼저보이고,
해당 for문에 대해서는 비동기적으로 실행되는 모습을 보입니다.
즉 for문을 돌려달라는 것에 대해서 끝날 떄까지 기다리는 게 아니라, 응답에 관계없이 바로 다음 동작인 
res.end('Async Start');가 실행됩니다.
 */

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  }
  if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  }
  if (req.url === '/async'){
    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
    }, 0); // setTimeout을 0으로 설정하여 비동기 처리
    res.end('Async Start');
  }
});

server.listen(8080, () => {
  console.log('Server listening on port : 8080....');
});

