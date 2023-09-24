/*
    try catch 문이랑 async, await를 같이 사용하거나,
    Promise라는 객체를 만들어서 .then(), .catch()와 같이 사용합니다.
*/

import { readFile, writeFile } from 'fs/promises';
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8');
    const second = await readFile('../content/second.txt', 'utf8');
    await writeFile(
      '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
