'use strict';
// class: template
// object: instance of a class


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const min = new Person('min', 22);
console.log(min.name);
console.log(min.age);
min.speak();


// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter
    get age() {
        return this._age;
    }

    // setter
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);


// 3. Feilds (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}


// 5. Inheritace
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // overriding
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true