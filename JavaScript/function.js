// 1. Function declaration
// function name(param1, param2) { body... return ; }
// !!! one function === do one thing !!!
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (-> 함수를 변수에 할당 / 파라미터로 전달 / 리턴값으로 지정 가능)

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
// -> TS
// function log(message: string): number {
//     console.log(message);
//     return 0;
// }
log('Hello');


// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
// + reference 는 내용이 저장된 메모리를 가리키고 있음
function changeName(obj) {
    obj.name = 'coder';
}
const min = {name:'min'};
changeName(min);
console.log(min); // changed


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
function printAll(...args) { // 배열 형태로 파라미터가 전달됨
    for (let i = 0; i < args.length; ++i) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// Tip. Early return, early exit
// - Bad case
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}

// - Good case
function upgradeUser(user) {
    if (user.point <= 10) {
        return ;
    }
    // long upgrade logic ...
}

function sum(a, b) {
    return a + b;
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to othe functions.
// can be returned by another funtion

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoiseted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function
    console.log('print');
};
print(); // 결과 출력
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // parameter로 함수가 전달됨
    if (answer === 'love you') { // 정답이 입력된 경우에
        printYes();
    } else { // 오답이 입력된 경우
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    // print(); // recursions
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => {
    // do something more
    return a + b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); // 선언과 동시에 호출 -> 최근 프로젝트에는 잘 사용 x


// Quiz
const calculate = (command, a, b) => {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}