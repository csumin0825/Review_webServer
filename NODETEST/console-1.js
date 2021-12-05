const { odd, even } = require('./var');

console.time('hi');

function checkOddOrEven(str){
    if (num % 2){  //홀수면
        return odd;
    }
    return even;
}

console.timeEnd('hi');

module.exports = checkOddOrEven;