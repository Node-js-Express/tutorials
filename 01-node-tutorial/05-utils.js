const sayHi = (name) => {
    console.log(`Hello there ${name}`)
  }

  // module.exports = sayHi
  // export를 통해 외부 파일에서도 사용할 수 있도록 만들어줍니다.
  export default sayHi
  