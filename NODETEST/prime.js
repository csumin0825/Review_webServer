const min = 2;
const max = 10000000;
const primes = [];

// 소수가 몇개인지 찾아내는데 걸리는 시간
function findPrimes(start, range) {
  let isPrime = true;
  const end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

console.time('prime');
findPrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);

// 멀티 스레드로 구현 -> prime-worker.js