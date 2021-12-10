const exec = require('child_process').exec;

var process = exec('dir');
// 인수로 dir 명령어를 넣음

process.stdout.on('data', function(data) {
// data 이벤트 리스너에 버퍼 형태로 전달
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
