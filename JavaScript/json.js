// JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'min' : value;
});

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birtDate' ? new Date(value) : value;
});
console.log(obj);
// obj.jump(); // error: 오브젝트가 stringify 되면서 메소드는 사라짐

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 
// reviver를 작성하지 않을 경우에는 error 발생
// 오브젝트가 stringify 될 때 string 값으로 저장되기 때문