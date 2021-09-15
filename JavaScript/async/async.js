"use strict";

// async & await
// clear style of using promise
// => promise를 무조건 async & await 으로 한다고 해서 무조건적으로 좋은 것은 아님

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    // Promise 파라미터에 전달된 함수 블럭이 비동기적으로 실행됨
    resolve("min");
  });
}

// 앞에서 Promise 를 이용하여 비동기 함수를 선언하는 대신, async 키워드를 사용
async function fetchUser2() {
  // => 이러한 async 키워드 함수는 자동적으로 Promise로 변환됨
  // do network request in 10 secs....
  return "min";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await -> async 키워드 함수 내부에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  // ms 초가 지난 후 resolve 를 호출하는 Promise
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// function pickFruits() {
//     return getApple()
//     .then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

async function pickFruits() {
  // const apple = await getApple();
  // const banana = await getBanana();
  // => 비효율적인 문제점 존재.
  // - 각 작업은 독립적임에도 불구하고, 앞선 작업이 끝날 때까지 기다렸다가
  // 그 다음 작업을 실행해야함.

  // solution
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // promise 가 생성되는 순간 promise 블럭 내부 코드가 실행됨
  // => 두 Promise 코드를 병렬적으로 실행시킴
  const apple = await applePromise();
  const banana = await bananaPromise();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // all -> 리스트 형태로 여러 개의 비동기 함수를 받아오고,
  // 이 함수들을 병렬적으로 실행시킴.
  // 각 함수들의 결과값은 리스트 형태로 저장하여 리턴
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne.then(console.log); // banana
