const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
// 암호화 알고리즘(다른 알고리즘 사용가능), 키, iv
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
// 암호화될 대상(문자열), 인코딩 방법, 암호화
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
// 복호화할 때 사용할 알고리즘, 키, iv
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);
