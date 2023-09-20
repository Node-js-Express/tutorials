function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asynchronousTask() {
    console.log("1. 비동기 작업 시작");
    await delay(2000); // 2초 동안 대기
    console.log("3. 비동기 작업 완료");
  }
  
  function synchronousTask() {
    console.log("2. 동기 작업 시작");
    for (let i = 0; i < 1000000000; i++) {} // 긴 연산 (대략 1초 소요)
    console.log("4. 동기 작업 완료");
  }
  
  console.log("시작");
  asynchronousTask();
  synchronousTask();
  console.log("끝");
  