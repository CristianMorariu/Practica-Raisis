//var- old, let ,const
//string, numbers, boolean , null , undefined
//Duplicate Line Up : Ctrl + Alt + Shift + 8.
//Duplicate Line Down : Ctrl + Alt + Shift + 2

/*const age = 30;
age = 31;
console.log(age); /*

/*const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null; // o variabila care nu contine nimic 
const y = undefined; // acelasi lucrcu ca si linia de jos
let z;
console.log(typeof x);/*

/*const name2 = 'John';
const age2 = 24;
// Concatenation
console.log('My name is ' + name2 + 'and I am ' + age2);// metoda veche
// Template String 
const hello = `My name is ${name2} and I am ${age2}`;
console.log(hello);*/

/*const s = 'HeLlo WORlD';

console.log(s.length);
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));//split a string into an array

const s2 = 'technology, computers, it ,code';
console.log(s2.split(','));*/

/*//ARRAYS
const numbers = new Array(1, 2, 3, 4, 5, 6);
const fruits = ['apples', 'oranges', 'pears', 10, true];

fruits[3] = 'grapes';// desi e const putem adauga valori in vector 

console.log(numbers);
console.log(fruits[1]);
fruits.push('mangos');//adauga la sfarsit
fruits.unshift('strawberries');//adauga la inceput
fruits.pop();//scoate ultimul element
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);*/

/*//obiecte
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movie', 'sports'],
    adress: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName, person.hobbies[1]);

const { firstName, lastName, adress: { city } } = person;

person.email = 'john@gmail.com';
console.log(firstName);
console.log(person);*/

//VECTORI DE OBIECTE
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isComplete: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isComplete: false
    },
    {
        id: 3,
        text: 'Dentist appt',
        isComplete: true
    }
];

console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/*//For

for (let i = 0; i < 5; i++) {
    console.log(`For loop number:${i}`);
}

//While

let i = 0;
while (i < 4) {
    console.log(`While loop number:${i}`);
    i++;
}*/

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

for (let todo of todos) {
    console.log(todo.id);
}

//forEach , map , filter 

todos.forEach(function (todo) {
    console.log(todo.text);
});

// const todoText = todos.map(function (todo) {
//     return todo.text;
// });
//minut 46
const todoCompleted = todos.filter(function (todo) {
    return todo.isComplete === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todoCompleted);

/*const x = 10;
if (x === 10) { // verific asi tipul de data daca corespunde
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is grater than 10');
} else {
    console.log('x is not 10');
}

const y = 10;
const color = y > 10 ? 'red' : 'blue';

console.log(color);

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}*/

function addNums(num1 = 1, num2 = 0) {
    return num1 + num2;
}
//daca ai o singura expresie nu mai ai nevoie de {} + daca ai cv de returnat nu mai ai nevoie de return
const addNum = (num1 = 1, num2 = 0) => num1 + num2;
// e folositor la forEach()
console.log(addNum(5, 4));

/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}
Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}*/

//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getFullYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object
const person1 = new Person('John', 'Doe', '04/03/1980');
const person2 = new Person('Mary', 'Smith', '06/07/1980');

console.log(person1);
//console.log(person2.dob.getFullYear());
console.log(person1.getFullName());