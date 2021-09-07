// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = { key : value }; 오브젝트는 키와 값의 집합체

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(name, age) {
    console.log(name);
    console.log(age);
}
// => 파라미터가 많아질 경우 번거로움 증가하는 문제점

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const min = { name: 'minsan', age: 22 };
// JS 에서는 중괄호{}만을 이용해서 바로 오브젝트를 생성할 수 있음
print(min);
// => object를 이용하여 개선

// + JS 는 Runtime에 data type이 결정되는 언어
min.isStudent = true; // allowed
// 이런식으로 필드를 새로 추가하는 것이 가능.
// 이렇게 추가하는 방식은 편리하고 빠르지만, 추후 유지보수가 매우 힘듦
// => 사용자제

delete min.isStudent; // allowed



// 2. Computed properties
// key should be always string
console.log(min.name); // minsan
console.log(min['name']); // minsan

// min.name 방식은 key를 알고 있을 때 사용. 보통 코딩할때는 이를 사용한다.
// min['name'] 형식은 어떤 key인지 모를 때 사용. (= key 자체가 runtime에서 결정나는 경우)
// => 동적으로 key를 받아올 때 유용
// function printValue(obj, key) {
//     // console.log(obj.key); // undefined 값이 나옴
//     console.log(obj[key]);
// }

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const person4 = makePerson('min', 22);
const person4 = new Person('elile', 30);
console.log(person4);

// 위처럼 일일이 입력하지 않고 오브젝트를 만드는 '함수'로 작성
function makePerson(name, age) {
    return {
        name, // name=name; 으로 처리
        age, // age=age;
    };
}
// => 과거 js에 클래스가 없을 때 함수로 작성하였음

// Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in min); // true
console.log('random' in min); // false

// 6. for .. in vs for .. of
// for (key in obj)
console.clear(); // 앞에서 출력한 내용 삭제
for (key in min) {
    console.log(key); // name age
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value); // 1 2 4 5
}
// 복습
// array.forEach( (value) => console.log(value));

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name:'min', age:'22' };
const user2 = user;
user2.name = 'coder';
console.log(user.name); // coder

// old way
const user3 = {};
for(key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {}; // target
Object.assign(user4, user); // user : 복사하고자 하는 오브젝트
// => 간단하게
const user5 = Object.assign({}, user);


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big