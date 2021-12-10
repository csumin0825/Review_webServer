const {
    Worker, isMainThread, parentPort,
  } = require('worker_threads');
  
  if (isMainThread) { // 부모일 때
  // 현재 코드가 메인 스레드에서 실행되는지, 생성한 워커 스레드에서 실행되는지
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    // on을 사용하면 직접 워커를 종료해야함
    // 한번만 사용하려면 once 사용하기
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
    // 워커에서 데이터를 보낼 수 있음
  } else { // 워커일 때
    parentPort.on('message', (value) => {
    // 이벤트 리스너로써 부모로부터 메세지를 받고
      console.log('from parent', value);
      parentPort.postMessage('pong');
      // 부모에게 메세지를 보내는 역할
      parentPort.close();
      // worker.on('exit') 실행
    });
  }
  