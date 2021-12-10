const spawn = require('child_process').spawn;

var process = spawn('python', ['test.py'], {shell:true});
// 파이썬 명령어 (인수) 명령어, 옵션 배열

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
