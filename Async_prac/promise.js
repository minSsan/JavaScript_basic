// 콜백함수 적용
function getData(callbackFunc) {
    $.get('url주소/products/1', (response) => {
        callbackFunc(response); // 서버에서 받은 response를 callbackFunc 파라미터로 넘김
    })
}

getData((tableData) => {
    console.log(tableData);
});

// 위 코드에 프로미스 적용
function getDataPromise() {
    return new Promise((resolve, reject) => {
        $.get('url주소/products/1', (response) => {
            resolve(response);
        });
    });
}

getDataPromise()
    .then(res => {
        console.log(res);
    });

// Promise의 세 가지 상태
// 1. Pending(대기) - 비동기 처리 로직이 아직 미완료 상태
//    : new Promise(); 와 같이 프로미스 객체 생성할 때 대기 상태가 된다.
// 2. Fulfilled(이행) - 비동기 처리가 완료되어 프로미스가 결과값을 반환해준 상태
//    : resolve 실행시 이행 상태가 된다. -> then으로 값을 넘겨받을 수 있다.
// 3. Rejected(실패) - 비동기 처리가 실패 or 오류 발생한 상태
//    : reject 실행시 실패 상태가 된다. -> catch로 실패 처리 결과값을 넘겨받을 수 있다.

function getDataPromise2() {
    return new Promise((resolve, reject) => {
        $.get('url 주소/products/1', (response) => {
            if(response) {
                resolve(response);
            }
            reject(new Error("Request is failed"));
        });
    });
}

getDataPromise2()
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Promise Chaining
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
.then((response) => {
    console.log(response); // 1
    return result + 10;
})
.then((response) => {
    console.log(response);
    return result + 20; // 11
})
.then((response) => {
    console.log(response); // 31
})

// 실무예제
let userInfo = {
    id: 'test@abc.com',
    pw: '****',
};

function parseValue() {
    return new Promise((resolve, reject) => {
        // ...
    });
}

function auth() {
    return new Promise({
        // ...
    });
}

function display() {
    return new Promise({
        // ...
    });
}
// 사용자 정보 파싱, 인증 등의 작업
getDataPromise(userInfo)
    .then(parseValue)
    .then(auth)
    .then(display);

// Promise 에러 처리
// 1. then()의 두 번째 인자로 에러 처리
getDataPromise().then(() => {
    // ...
}, (error) => {
    console.log(error);
});

// 2. catch()로 에러 처리
getDataPromise().then().catch((error) => {
    console.log(error)
});

// 가급적 2번 방법을 사용해야 함.
function getData2() {
    return new Promise((resolve, reject) => {
        resolve('hi');
    })
}

getData2()
    .then((result) => {
        console.log(result);
        throw new Error("Error in then()");
    }, (error) => {
        console.log('then error: ', error);
    });
// then()의 첫 번째 콜백 함수 내부에서 오류가 나는 경우 오류를 제대로 잡아내지 못함.
// => 에러 발생: Uncaught (in promise) Error: Error in then()

getDataa2()
    .then((result) => {
        console.log(result); // hi
        throw new Error("Error in then()");
    })
    .catch(err => {
        console.log('then error: ', err); // then error: Error: Error in then()
    });