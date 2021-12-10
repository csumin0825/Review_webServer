const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
  // (인수) 비밀번호, salt, 반복횟수, 출력바이트, 해시알고리즘
    console.log('password:', key.toString('base64'));
  });
});
