const http = require('http');
const fs = require('fs').promises;
// 요청이 들어오면 fs라는 모듈을 이용해서 html 파일을 읽어주고 
// data에 저장된 버퍼를 그대로 클라이언트에 보낸다.

http.createServer(async (req, res) =>{
    try{
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        // (상태코드) 2~: 성공, 3~: redirection, 4~: 요청오류, 5~: 서버오류
        // 응답을 클라이언트로 보내서 완료를 해야함
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(500, { 'Cotent-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081, ()=>{
        console.log('8081번 포트에서 서버 대기 중');
    });