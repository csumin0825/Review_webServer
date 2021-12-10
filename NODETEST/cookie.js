const http = require('http');

http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);  // 요청의 헤더
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });  
  // 다음과 같은 쿠키를 저장해라 (mycookie-test)
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
  });

/* 첫번째 요청을 보내기 전까지는 아무런 쿠키가 없다.

*/