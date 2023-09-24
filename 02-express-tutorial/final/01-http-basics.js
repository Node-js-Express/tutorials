import http from 'http';

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page</h1>');
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  // 404 
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

server.listen(8080);

/**
 * listen([port])은 몇번 포트에서 해당 요청을 받을 것인지 정합니다.
 * 즉 localhost:[port]에서 요청을 기다리겠다는 의미입니다.
 * url은 localhost:8080 뒤에 붙은 url를 말합니다.
 * 예를 들어서 localhost:8080/about과 같은 형태를 말합니다.
 * 해당 주소는 웹페이지의 홈페이지 주소를 치는 공간에 localhost:8080라고 입력하면, url에 '/'라고
 * 정의 해놓은 부분에서 response로 사전에 정의해놓은 정보를 줍니다.(html, json 등)
 */