'use strict';

// 1. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference (object는 reference로 저장)
const min1 = { name: 'min' };
const min2 = { name: 'min' };
const min3 = min1;
console.log(min1 == min2); // false (서로 다른 레퍼런스)
console.log(min1 === min2); // false
console.log(min1 === min3); // true


// 2. Conditional operators: if
// if, else if, else
const name2 = 'df';
if (name2 === 'min') {
    console.log('Welcome, min!');
} else if (name2 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown')
}


// 3. Ternary operator: ?
// condition ? value1 : value2;
console.log(name2 === 'min' ? 'yes' : 'no');


// 4. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 5. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}
