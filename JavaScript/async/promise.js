"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// => 불필요한 서버통신 구동 주의!
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing seomthing...");
  setTimeout(() => {
    // resolve('min');
    // 성공적으로 받아온 데이터를 resolve 라는 콜백함수로 전달하면 된다.

    reject(new Error("no network"));
    // 실패하는 경우에 reject 라는 콜백 함수로 에러 문구를 전달
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    // promise 라는 Promise가 정상적으로 수행될 때
    // Promise가 정상작동하여 resolve 메소드를 통해 반환한 값을 value 라는 파라미터로 전달
    console.log(value); // min
  })
  .catch((error) => {
    // promise 라는 Promise가 정상적으로 수행되지 않을 때
    // Promise 객체 내에서 reject 메소드를 통해 전달한 에러 문구를 파라미터로 전달 받음
    console.log(error); // Error: no network
  })
  .finally(() => {
    // Promise 객체의 성공/실패 여부와 상관 없이 항상 마지막에 호출됨
    console.log("finally");
  });
// then 호출 이후 catch를 바로 호출
// => chaing: then을 호출하게 되면 동일한 Promise 객체를 리턴(API 참고)
//          => 이 객체에 catch를 등록하는 것

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error: ${hen} => egg`)), 1000);
    //        setTimeout(() => resolve(`${hen} => egg`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => cook`), 1000);
  });

getHen() //
  .then(getEgg) // .then((hen) => getEgg(hen))
  .catch((error) => {
    // 에러를 잘 핸들링하기 위한 코드(빵꾸처리)
    return "bread"; // 에러를 대비해 대체 값을 리턴
  })
  // => 에러가 발생할 가능성이 있는 곳 바로 뒤에 catch를 작성해서 에러를 처리하면 좋음
  .then(cook) // .then((egg) => cook(egg))
  .then(console.log)
  .catch(console.log); // .then(meal => console.log(meal));
