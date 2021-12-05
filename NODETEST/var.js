const odd = '홀수입니다';
const even = '짝수입니다';

exports.odd = odd;  //this.odd = odd도 가능
exports.even = even
// 두 개 이상을 모듈로 만들 때 


//exports = { odd, even,};

//module.exports = { odd, even,};  // 두 개 이상을 모듈로 만들 때 (위에꺼랑 둘 중 하나만 사용)

//module.exports === exports === {odd, even}
