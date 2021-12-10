const fs = require('fs').promises;  // 프로미스의 버전

setInterval(()=>{
    fs.unlink('./abcd.js');
}, 1000);

// 프로미스 오류는 try catch문 사용 권장