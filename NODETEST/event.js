const EventEmitter = require('events');
const { on } = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1',()=>{  
    console.log('이벤트 1');
});
// 이벤트 이름, 이벤트가 발생했을 때 호출되는 콜백 함수
myEvent.on('event2', ()=>{
    console.log('이벤트 2');
});
// 이벤트 이름, 이벤트가 발생했을 때 호출되는 콜백 함수
myEvent.on('event2', ()=>{
    console.log('이벤트 2 추가');
});
myEvent.once('event3',()=>{  // 한번만 실행됨
    console.log('이벤트 3');
});  

myEvent.emit('event1');  // 이벤트 호출
myEvent.emit('event2');  // 이벤트 호출

myEvent.emit('event3');  // 이벤트 호출
myEvent.emit('event3');  // 실행 안 됨

myEvent.on('event4', ()=>{
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');  
// 이벤트에 연결되어있는 리스너 모두 삭제
myEvent.emit('event4'); // 실행 안 됨

const listener = ()=>{
    console.log('이벤트 5');
};
myEvent.on('event5',listener);
myEvent.removeAllListeners('event5', listener);
myEvent.emit('event5');  // 실행 안 됨

console.log(myEvent.listenerCount('event2'));