// GLOBALS  - NO WINDOW !!!!

// __dirname  - 현재 폴더 위치
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - 현재 module에 대한 정보 (file)
// process    - 프로그램이 실행되는 곳에 대한 env info

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
