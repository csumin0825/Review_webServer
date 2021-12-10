const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
// 읽어들일 파일의 경로(노드 명령어를 사용하는 콘솔 기준의no 경로)
  if (err) {
    throw err;
  }
  console.log(data);  // 버퍼
  console.log(data.toString());  
  // 버퍼에 들어있는 문자열을 스트링으로 변환
});

// fs 모듈은 콜백형식의 모듈이다
// 프로미스 형태로 바꾸는 방법을 추천
