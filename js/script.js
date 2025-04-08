/*practice functions 17/03/25*/

/*Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь») і виводити рядок (в нашому випадку «Привіт, Василь»).*/

/*1
const hello2 = function (name) {
     

    console.log(`Hello ${name}`) 
} ;


hello2('Matviy') ;
*/


/*2

/*Напишіть функцію mul(n, m), яка приймає два аргументи і повертає  суму цих аргументів. Перевірте її роботу.

const mul = function(n , m) {

    console.log( n * m)

};

mul(10,8) ;

*/



/*3*/

/*Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
Myaveragescore: A (якщо середня оцінка від 91 до 100)
My average score: B (якщо середня оцінка від 81 до 90)
My average score: C (якщо середня оцінка від 71 до 80)
My average score: D (якщо середня оцінка від 70 і менше)
Для перевірки:
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));*/

/*
const myAverageScore = function (array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i]
    };


    let sum = total / array.length;

    let grade;

    if (sum >= 91) {

        grade = 'A';
    } else if (sum >= 81) {

        grade = 'B';

    } else if (sum >= 71) {

        grade = 'C';

    } else {

        grade = 'D';

    };

    return `My average score: ${grade}    `


};


console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));


*/



/*callbacks



const print = function (message ){

    console.log(message)
};


const order = function (callback ){

    const string = 'Hello';
    console.log(message)
    callback(string)//Hello
};


order(print);


/*2

function greet (name, callback ){

    console.log('Hello' + name);
    callback();
};


function sayGoodbye(){

    console.log('Goodbye!')
};

greet ('Matviy', sayGoodbye)


*/

/*3
  

const repeat = function (n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }

}

repeat(5);
repeat(20);
repeat(2);
*/
/*

const print = function (value) {
    console.log(value);
};


const pretty = function (value) {
    console.log('Logging value:', value)

}

const repeat = function (n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

repeat(3, pretty)

*/

/*ДЗ лдя 24/03/25*/

/*Scrivere una funzione calcola(a, b, callback) che accetta due numeri e una funzione di callback. La richiamata deve eseguire l'operazione matematica di aggiunta di numeri.*/

/*1


const calculate = function ( a, b, callback ){

    return callback( a, b);
};

const operation = function (a, b){

    return a + b;
};

console.log(calculate(10,5 , operation));

*/


/*Фільтрація масиву

const filter = function ( array, test ){

    const filtredEl = [];

    for ( const el of array){

        const passed = test(el);
        
    }

    if ( passed ){
        filtredEl.push(el)
    }

    

    return filtredEl
};

*/


/*arrow method

const add = (a, b, c) => { a + b + c };

const add1 = x => x * 5;

const add3 = () => {
    console.log('Hello')     <----- anonimus function
};

const add4 = (...args) => {
    console.log(args);
}

add4(1, 2, 3, 4, 5);

*/
/*
const hotel = {
    name : 'Hilton',
    stars : 5,
    clients : ['Matviy', 'Bob', 'Tom', 'Jhon', 'Anna', 'Dylan'],
    pool : true,
}
/*
console.log(hotel); //{name: 'Hilton', stars: 5, clients: Array(6), pool: true}
console.log(hotel.name) //first method// //Hilton//
console.log(hotel['name'])//second method //Hilton
console.log(hotel.pool) //true

hotel.name = 'Rixos'; // name Hotel
console.log(hotel); //{name: 'Rixos', stars: 5, clients: Array(6), pool: true}

hotel.capacity = 150;
console.log(hotel) //{name: 'Rixos', stars: 5, clients: Array(6), pool: true, capacity: 150}

hotel ['addres'] = 'Red Sea';
console.log(hotel)  //{name: 'Rixos', stars: 5, clients: Array(6), pool: true, capacity: 150, …}


delete hotel.addres;  //first method
console.log(hotel);  //{name: 'Rixos', stars: 5, clients: Array(6), pool: true, capacity: 150}

delete hotel['clients'];
console.log(hotel);  //{name: 'Rixos', stars: 5, pool: true, capacity: 150}

console.log(admin) //undefined 
*/
/*
let name = 'Rixos';
let stars = 5;
const hotel = {
    name,
    stars,
    capacity : 150,
}

console.log(hotel)  //{name: 'Rixos', stars: 5, capacity: 150}

*/
/*
const key = 'person';
const getKey = function () {
    return 'age';
};
const user = {
    [key]: 'Bob',
    [getKey()]: 20,
}

console.log(user) //{person: 'Bob', age: 20}

const hotel = {
    name: 'Rixos',
    stars: 5,
    capacity: 150,
    message() {
        console.log('Hello!')
    },
    showName() {
        console.log(thisname)
    },
}

hotel.message() //Hello!
*/


/*Scrivi una funzione che restituisca un nuovo array contenente tutti gli elementi dell'array moltiplicati per un dato numero utilizzando una funzione di callback*/

/*ДЗ для 31/03/25

function multiplyArray(array, mutiplier, callback) {


    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], mutiplier))
    }

    return result;

};

function multiply(num, multiplier) {

    return num * multiplier;
}

const numbers = [2, 7, 4, 6];
const multiplierNumb = multiplyArray(numbers, 3, multiply);
console.log(multiplierNumb)
*/

/*practice objects*/

/*1

const person = {
    name: 'Matvyi',
    age: 12,
    gender: 'boy',
    message() { console.log(`Hello my name is ${this.name} i'm ${this.age}, and i'm a ${this.gender} `) }

}

person.message();

*/

/*2

const car = {
    brand: 'audi',
    model: 'rs6',
    year:  '2022',
    color: 'black matter',
   message(){
    console.log(`This car is an: ${this.brand} model ${this.model} from the ${this.year} year. It's color is:${this.color}. `)
   }
}

car.message();

/*3

const book = {
    title: 'Javscript',
    author: 'Nik Morgan',
    year: 2010,
    genre: 'for kids',
    message(newTitle, newAuthor, newYear, newGenre){
        this.title = newTitle;
        this.author  = newAuthor;
        this.year = newYear;
        this.genre = newGenre;
    }

}

book.message('Javascript', 'Matvi Holovatyi', 2012, 'fantasy');

console.log(book)

*/

/*4

const students = [
    { name: 'Matvyi', age: 12, gender: 'boy', grade: 10 },
    { name: 'Achille', age: 13, gender: 'boy', grade: 7 / 5 },
    { name: 'Leo', age: 12, gender: 'boy', grade: 9 }];



 function media (students) {

    if(students.length === 0 ) return 0 ;

    let total = 0;

    for(let i = 0; i < students.length; i++){

        total += students[i].grade 

    }

    return total / students.length;

};

const average = media(students);
console.log(average);

/*5

const weather = {
    temperature: null,
    humidity: 30,
    windspeed: 10,

    message() {
        return this.temperature < 0

            ? 'temperature beyond zero'
            : 'temperature above zero'
    }



}

const final = prompt('The temperature is beyond 0 gradius celcius');

weather.temperature = Number(final);

console.log(weather.message()
);


/*ДЗ лдя 4/04/25

Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"

/*1

const restaurant = {
    name: 'Matviy chef ',
    cuisine: 'international food',
    address: 'food street 34',
    rating: '2 stars',

    message(newAddress, newRating) {
        this.address = newAddress;
        this.rating = newRating;
    }

}

restaurant.message('Viale della pizza 10', '5 stars');

console.log(restaurant);
*/


/*object for in*/


/*
const hotel = {
    name: 'Rixos',
    stars: 5,
    capacity: 300,
}
*/
/*
for ( const key in hotel) {
    console.log('Value:' , hotel[key])
}*/


/*methods

const keys = Object.keys(hotel); /*(3) ['name', 'stars', 'capacity']

console.log(keys)

const values = Object.values(hotel); /*(3) ['Rixos', 5, 300]

console.log(values)

const entries = Object.entries(hotel); /*(3) [Array(2), Array(2), Array(2)]

console.log(entries)

*/


/*
const user = {
    name: 'Luigi',
    age: 13,
    gender: 'Boy',
    address: 'Pavia'
}

const keys = Object.keys(user)/*(3) ['name', ...]

for (const key of keys) {
    console.log(user[key])
}

*/


/*
const user = {
    name: 'Luigi',
    age: 13,
    gender: 'Boy',
    address: 'Pavia'
}

const entries = Object.entries(user);

for ( entry of entries){
    const key = entry[0]
    const value = entry[1]

    console.log(`${key} - ${value}`)
}
*/
/*
const food = {
    apple: 5,
    cheese: 2,

    meat: 3,
    bread: 1,
    oranges: 5,
}

const values = Object.values(food);

let total = 0;

for ( const value of values){
    total += value
}

console.log(total);



const temp = [10, 15, 12, 6, 8, 4, -2, 0, -3];

const min = Math.min(...temp);

console.log(min)

const names = [ 'Matvyi', 'Bob', 'Martin', 'Nick', 'Sigma', 'Alex' ]

const copyOfNames = [...names]

console.log(names);

console.log(copyOfNames);

console.log(names === copyOfNames)

*/
/*

const names = [ 'Matvyi', 'Bob', 'Martin', 'Nick', 'Sigma', 'Alex' ]

const copy = [...names, 'Mary']

console.log(names);/*(6) ['Matvyi', 'Bob', 'Martin', 'Nick', 'Sigma', 'Alex']
console.log(copy) /*(7) ['Matvyi', 'Bob', 'Martin', 'Nick', 'Sigma', 'Alex', 'Mary']
*/
/*
const arr1 = [1, 2, 3, 4];
const arr2 = ['Matvyi', 'Bob', 'Martin'];
const newArr = [... arr1 , ...arr2];

console.log(newArr)

const a = { x: 1, y: 2}
const b = { x: 3, z: 4}

const c = Object.assign({}, a, b)

console.log(c)

const d = {...a, ...b, l: 5}

console.log(d)
*/
/*
const temp = [18, 14, 12, 21, 17, 29, 24]

const min = Math.min(...temp);
const max = Math.max(...temp);

console.log(min)
console.log(max)
*/

const numbers1 = [1, 2, 3, 54, 12];
const numbers2 = [5, 65, 32, 14];


const numb = [...numbers1, 15, 30, ...numbers2]

console.log(numb)