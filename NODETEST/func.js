const { odd, even } = require('./var');  // 확장자 생략 가능

function checkOddOrEven(num){
    if(num % 2){  // 홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;  // 한 가지만 모듈로 만들고 싶을 때
//module.exports !== exports === {}