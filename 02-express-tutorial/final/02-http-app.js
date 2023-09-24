import http from 'http';
import { readFileSync } from 'fs';

// get all files
const homePage = readFileSync('../navbar-app/index.html', 'utf8');
const homeStyles = readFileSync('../navbar-app/styles.css', 'utf8');
const homeImage = readFileSync('../navbar-app/logo.svg');
const homeLogic = readFileSync('../navbar-app/browser-app.js', 'utf8');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  }
  /**
   *  const homeStyles = readFileSync('../navbar-app/styles.css', 'utf8');을 통해 가져온
   *  styles.css 파일을 보여줍니다.
   *  Header에 해당 파일에 대한 종류를 명시하여서 브라우저에서 해당 파일 형식에 맞춰 나타낼 수 있도록 해줍니다.
   */
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
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

