const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme2.txt');
// 동기 메서드 : 보통 Sync가 붙음
// readFile메서드 대신 readFileSync
// readFileSync : 콜백함수를 넣는 대신 직접 리턴값을 받아옴
// 리턴값을 바로 활용할 수 있음.
// 요청이 수백개 들어왔을때 성능 상 문제가 생길 수 있다.
// 이전에 작업이 완료되어야 다음으로 넘어감
// 효율성이 떨어짐.
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');

// 시작
// 1번 저를 여러 번 읽어보세요.
// 2번 저를 여러 번 읽어보세요.
// 3번 저를 여러 번 읽어보세요.
// 끝