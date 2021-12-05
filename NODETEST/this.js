console.log(this);  // global이 아닌 빈 객체
console.log(this === module.exports,module.exports === exports);

function a() {
    console.log(this === global);  // 함수 내에서 this는 global
}

a();