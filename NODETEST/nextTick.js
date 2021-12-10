setImmediate(()=> {  // 우선순위가 없음
    console.log('immediate');
});
process.nextTick(()=> {  // 우선순위가 있음
    console.log('nextTick');
});
setTimeout(() => {  // 우선순위가 없음
    console.log('timeout');
},0);
Promise.resolve().then(()=> console.log('promise'));  // 우선순위가 있음

// 어떤 것이 먼저 실행되는지 확실하지않음