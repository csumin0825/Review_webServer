const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
// 인수 : 읽을 파일의 경로 , (옵션) 버퍼의 크기를 지정 
const data = [];

readStream.on('data', (chunk) => {
// 이벤트 리스너를 붙여서 사용
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
  // 하나씩 보여주고 합쳐서 하나의 문자열로 만듦
});

readStream.on('error', (err) => {
  console.log('error :', err);
});

// 16바이트씩 작게 나누어서 데이터를 처리