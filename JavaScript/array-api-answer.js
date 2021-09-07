// Q.1
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
}

// Q.2
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(",");
}

// Q.3
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // 배열 자체를 수정
}

// Q.4
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    // splice -> 배열 그 자체를 수정
    // slice -> 배열에서 원하는 부분만 리턴해서 받아올 수 있음
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q.5
{
    const result = students.find((student) => value.score === 90);
}

// Q.6
{
    const result = students.map((student) => student.enrolled);
    const result = students.filter((student) => student.enrolled);
}