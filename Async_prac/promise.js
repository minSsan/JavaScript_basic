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