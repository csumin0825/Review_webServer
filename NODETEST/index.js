const { odd, even } = require('./var');
const checkNumber = require('./func');  //캐시에 저장된 값을 읽음 : 더 빠르게 실행가능

function checkStringOddOrEven(str){
    if (str.length % 2){  //홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));