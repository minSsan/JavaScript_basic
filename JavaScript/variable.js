'use strict';

// 1. Variable: let 을 사용. 변수가 메모리를 가리킴(포인터)
// read & write
// * var (don't ever use this!) 사용하지 말것
// * var -> hoisting (move declaration from bottom to top) (호이스팅: 아래에 있는 선언부를 윗쪽으로 올리는 것)
//       -> local / global 구분 없이 어느 곳에서든 사용 가능 (블록 무시)

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS

// 2. Constant: const 사용. 변경 불가능한 값
// read only
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 3. symbol: create unique identifiers for objects
//  ex) const symbol = Symbol('id');
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id'); // for: 주어진 문자열에 맞는 심볼을 생성
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// 심볼을 출력할 때는 description 을 선언

// 4. Dynamic typing: dynamically typed language
// 보통의 프로그래밍 언어에서는 type이 static한 성질을 가짐
// 타입을 자유자제로 변경할 수 있음. 
// but, RuntimeError 가 발생한다는 문제점이 있음. => TS(TypeScript) 등장

// 5. object
const min = {'name': 'min', age: 22};
min.age = 23; // 가능
// min 이라는 object 자체만 const 일뿐,
// min object 내부의 name과 age는 const가 아닌,
// 특정 메모리를 가리키는 변수이기 때문이다.
