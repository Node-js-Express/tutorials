const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')


/*
  path에서 ..은 상위 폴더를 의미합니다. 예를 들어서 현재 위치가 
  /tutorial/01-node-tutorial/1-event-loop-examples 이라면,
  /tutorial/01-node-tutorial/가 ..를 의미합니다.
  .은 현재 폴더 위치를 의미합니다. 

  그래서 /tutorial/01-node-tutorial/1-event-loop-examples가 .이랑 똑같습니다.
  현재 content라는 폴더는 /tutorial/01-node-tutorial/에 있으므로
  해당 readFile('./content/first.txt', 의 path를
  ../content/first.txt로 바꿔야 동작이 됩니다.
*/ 