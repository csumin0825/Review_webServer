const fs = require('fs');

// 비동기 메서드
// 동기보다 효율적임
console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

// 시작
// 끝
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.

// 시작과 끝을 제외하고는 순서가 달라짐
// 비동기 메서드는 요청을 먼저 한 후에 끝 출력 뒤에
// 백그라운드가 각 요청 처리가 완료되면 콜백함수 호출
