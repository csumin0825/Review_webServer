const express = require('express');  
// express 내부에 http 모듈이 내장되어있음.
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
// 인수(키, 값) env에 포트번호가 있으면 사용, 없으면 3000 사용

// 미들웨어 ~
app.use((req, res, next)=>{  
  // 매개변수 세 개, 다음 미들웨어로 넘어가기 위한 함수
  // 매개변수 첫 번째에 주소가 들어오면 주소로 시작하는 요청에 의해서만 미들웨어가 실행
  console.log('요청처리!');
  next();  // next를 실행하지않으면 다음 미들웨어로 넘어가지 않는다.
});
//~~

// app.get('/', (req, res) => {
// // 인수(주소, 라우터)
//   // res.send('Hello, Expr ess');
//   res.sendFile(path.join(__dirname, '/index.html'));
// });

app.get('/', (req, res, next)=>{
  console.log('GET / 요청에서만 실행됩니다.');
  next();
}, (req, res) =>{
  throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next)=>{  // 에러 처리 미들웨어?
  console.error(err);
  res.status(500).send(err.message);
  // http 상태코드를 지정 (500은 성공)
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
