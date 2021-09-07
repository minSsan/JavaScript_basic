// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // console.log(fruits.reduce((prev, current) => prev + "," + current));
    console.log(fruits.join());
}
  
  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split());
}
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // console.log(array.sort((a, b) => b - a));
    console.log(array.reverse());
}
  
  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    let result = Object.assign([], array);
    result.shift();
    result.shift();
    console.log(result);
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
  
// Q5. find a student with the score 90
{
    students.forEach((value) => {
        if(value.score === 90) {
            console.log(value);
        }
    });
}

// Q6. make an array of enrolled students
{
    let result = new Array();
    students.forEach((value) => {
        if(value.enrolled) result.push(value);
    });
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let result = [];
    students.forEach((value) => result.push(value.score));
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.log(students.some((value) => value.score < 50));
}

// Q9. compute students' average score
{
    // let result = 0;
    // students.forEach((value) => result += value.score);
    // console.log(result / students.length);
    const result = students.reduce((prev, current_student) => prev + current_student.score, 0) / students.length;
    console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let result = [];
    students.forEach((value) => result.push(value.score));
    result = result.join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let result = [];
    students.forEach((value) => result.push(value.score));
    result = result.sort().join(', ');
    console.log(result);
}