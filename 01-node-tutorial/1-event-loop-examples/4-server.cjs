const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(8080, () => {
  console.log('Server listening on port : 8080....')
})

/*
  실행하시고 브라우저에서 localhost:8080를 접속하시면 request event가 두번갑니다.
  첫번쨰는 파비콘이라고 해서 웹페이지 탭에 있는 조그마한 이미지를 내놔라고 request하는거고,
  두번쨰는 웹에 보여줄 html 파일을 내놓으라고 하는겁니다.
*/