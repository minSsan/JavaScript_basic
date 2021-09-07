'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[2]); // undifined
console.log(fruits[fruits.length - 1]); // last item

// 3. Looping over an array
// print all fruits

for(let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit, index) => console.log(fruit, index));
// forEach -> 배열에 있는 각 value 마다 내가 전달한 함수를 호출함.

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('lemon');
console.log(fruits); // 앞에서부터 삽입

// shift: remove an item from the beginning
fruits.shift(); // 앞에서 부터 제거
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('lemon'); 
fruits.push('orange');
// ['apple', 'banana', 'strawberry','lemon', 'orange']

fruits.splice(1, 1); // 시작 인덱스, 갯수
console.log(fruits);
// ['apple', 'strawberry', 'lemon', 'orange']

fruits.splice(1, 1, 'melon', 'watermelon');
console.log(fruits);
// ['apple', 'melon', 'watermelon', 'lemon', 'orange']

// combine two arrays
const fruits2 = ['strawberry', 'peach'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// ['apple', 'melon', 'watermelon', 'lemon', 'orange', 'strawberry', 'peach']

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// ['apple', 'melon', 'watermelon', 'lemon', 'orange']
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('banana')); // -1

// includes
console.log(fruits.includes('banana')); // false
console.log(fruits.includes('lemon')); // true

// lastIndexOf
fruits.push('apple');
// ['apple', 'melon', 'watermelon', 'lemon', 'orange', 'apple']
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.lastIndexOf('apple')); // 5

console.clear();
console.log(fruits.toLocaleString());
console.log(fruits.join('|'));
fruits.reverse();
console.log(fruits);

console.log([11,2,22,1].sort());                // 오름차순 정렬
console.log([11,2,22,1].sort((a, b) => a - b)); // 오름차순 정렬
console.log([11,2,22,1].sort((a, b) => a - a)); // 변화 없음
console.log([11,2,22,1].sort((a, b) => b - a)); // 내림차순 정렬
console.log(fruits.map((value) => value + "!"));
console.log([11,2,22,1].reduce((prev, current) => prev + current)); // 36
console.log([11,2,22,1].reduceRight((prev, current) => prev - current)); // -34
