const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다', (err) => {
// 파일이 생성될 경로, 내용
    if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});
