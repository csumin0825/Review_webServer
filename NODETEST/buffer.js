const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());
// 버퍼가 가지고 있는 메서드
// length : 버퍼의 크기(바이트단위)
// toStinrg : 버퍼를 문자열로 

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());
// 버퍼 안에 있는 배열을 하나로 합쳐줌

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);
// 빈 버퍼를 생성

// 버퍼의 크기를 작게 만들어서 여러번에 나누어서 보내는 것이 효율적임
// -> 스트림 방식
