const path = require('path');

const string = __filename;

console.log('path.sep:',path.sep);
console.log('path.delimiter:', path.dlimiter);
console.log('------------------------');
console.log('path.dirname(): ', path.dirname(string));
console.log('path.extname(): ', path.extname(string));
console.log('path.basename(): ', path.basename(string));
console.log('path.basename - extname: ', path.basename(string, path.extname(string)));
console.log('path.parse()', path.parse(string));
console.log('path.format(): ', path.format({
    dir: 'C:\Users\csumi\OneDrive\문서\0_2021_2학기\2_웹서버프로그래밍_정선호\review',
    name : 'path',
    ext : '.js',
}));
// 자바스크립트에서 \역슬래시 두개씩 사용
console.log('path.normalize(): ',path.normalize('C:///Users\csumi\OneDrive\문서\0_2021_2학기\2_웹서버프로그래밍_정선호\review'));
console.log('---------------------------');
console.log('path.isAbsolute(c:\\): ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home): ', path.isAbsolute('./home'));
console.log('---------------------------');
console.log('path.relative(): ', path.relative('C:\Users\csumi\OneDrive\문서\0_2021_2학기\2_웹서버프로그래밍_정선호\review\NodeTest\path.js',));
console.log('path.join(): ',path.join(__dirname, '..', '..', '/Users', '.', '/NodeTest'));
// 상대경로로 처리
console.log('path.resolve(): ', path.resolve(__dirname, '..','Users','.','/NodeTest'));
// 절대경로로 인식