const {
    Worker, isMainThread, parentPort, workerData,
  } = require('worker_threads');
  
  if (isMainThread) { // 부모일 때
    const threads = new Set();
    threads.add(new Worker(__filename, {
    // new worker가 호출이되면 두번째 인수인 workerData 속성으로 원하는 데이터를 보낼 수 있음
      workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
      workerData: { start: 2 },
    }));
    for (let worker of threads) {
      worker.on('message', message => console.log('from worker', message));
      worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) {
          console.log('job done');
        }
      });
    }
  } else { // 워커일 때
    const data = workerData;
    parentPort.postMessage(data.start + 100);
    //부모로부터 데이터를 받음
  }
  

  // 워커 두 개 실행중
  // 멀티 스레드 구현