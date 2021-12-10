const http = require('http');  // http모듈 사용

//http.createServer((req, res) =>{  // 서버 요청과 응답에 대한 정보를 저장

//추가1~~
const server = http.createServer((req, res) =>{
//~~~~
    // res 라는 객체에는 메서드 3개
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    // 응답에 대한 정보를 기록하는 메서드
    // (인수 2개 )성공적인 요청(200) , 응답정보의 콘텐츠 형식(test/html)
    // 정보가 기록되는 부분 : 헤더
    res.write('<h1>Hello Node!</h1>');
    // 클라이언트에 보낼 데이터 '~'
    // 데이터가 기록되는 부분 : 바디
    res.end('<p>Hello Server!</p>');
    // 데이터를 클라이언트에 보낸 뒤 응답 종료


// listening이라는 메서드를 이벤트 리스너를 붙여서 사용
//추가1~~
});

server.listen(8080);

server.on('listening', () =>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
//~~~~~ 주석과 똑같이 실행가능


// 리슨 메서드에 콜백함수를 추가한 경우
// })
//     .listen(8080, () =>{  // 서버 연결  
//     // listen이라는 메서드
//     // 클라이언트에 공개할 포트번호, 연결을 완료하고 난 뒤에 실행될 콜백함수
//         console.log('8080번 포트에서 서버 대기 중입니다!');
//     });