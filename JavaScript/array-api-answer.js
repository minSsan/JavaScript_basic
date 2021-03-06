// Q.1
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
}

// Q.2
{
    const fruits = 'π, π₯, π, π';
    const result = fruits.split(",");
}

// Q.3
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // λ°°μ΄ μμ²΄λ₯Ό μμ 
}

// Q.4
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    // splice -> λ°°μ΄ κ·Έ μμ²΄λ₯Ό μμ 
    // slice -> λ°°μ΄μμ μνλ λΆλΆλ§ λ¦¬ν΄ν΄μ λ°μμ¬ μ μμ
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
    // const result = students.map((student) => student.enrolled); // μ€λ΅
    const result = students.filter((student) => student.enrolled);
}

// Q.7
{
    const result = students.map((student) => student.score);
}

// Q.8
{
    const result = students.some((student) => student.score < 50);
}

// Q.9
{
    const result = students.reduce((prev, current_student) => prev + current_student.score, 0) / students.length;
}

// Q.10
{
    const result = students
    .map((students) => students.score)
    .join();
}

// Q.11
{
    const result = students
    .map((students) => students.score)
    .sort()
    .join();
}