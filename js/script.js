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

/*2*/

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

/*3*/

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