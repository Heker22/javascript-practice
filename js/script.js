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


const numbers1 = [1, 2, 3, 54, 12];
const numbers2 = [5, 65, 32, 14];


const numb = [...numbers1, 15, 30, ...numbers2]

console.log(numb)
*/


/*ДЗ для 14/04/25

Scrivi uno script che, per l'oggetto utente, esegua in sequenza:
- aggiunge un campo umore con il valore 'felice'
- sostituisce il valore di hobby con 'paracadutismo'
- sostituisce il premio di valore con falso
- stampa il contenuto dell'oggetto utente nel formato chiave:valore -utilizzando Object.keys() e per...di





/*1


const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'paracadutism';
user.premium = false;


const keys = Object.keys(user);

for (const key of keys ){

    console.log(`${key}: ${user[key]}` )
}


*/


/*practice object

Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const countProps = function (obj) {
  // твій код
};


/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */


/*1

const countProps = function (obj) {



    return Object.values(obj).length

};




console.log(countProps({})); // 0


console.log(countProps({ name: 'Mango', age: 2 })); // 2


console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

*/
/*2

Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function (employees) {
  // твій код
};



 * Викличи функції для перевірки працездатності твоєї реалізації.

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence


  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango


  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux

*/

/*
const findBestEmployee = function (employees) {
    let bestEmployee = '';
    let maxTasks = 0;

    for ( const name in employees ){
        if (employees[name] > maxTasks){
            maxTasks = employees[name]
            bestEmployee = name;
        }
    }

    return bestEmployee;

};

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence


console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango


console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux
*/

/*
Scrivi una funzione che riceverà un array e il nome dell'amico che vuoi trovare
console.log(findFriendByName(amici, 'Poly'));
console.log(findFriendByName(amici, 'Chelsy'));*/

/*3



const findFriendByName = function(allFriends, friendsName){
    for(const friend of allFriends){
        if( friend.name === friendsName ){
            return `find this name: ${friendsName}`
        }
    }

    return `not found name ${friendsName}`
};

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

*/
/*practice*/
/*1
const user = {
    name: 'Bob',
    age: 20,
    gender: 'Boy'
}

const {name, age, gender, lastName = 'Dou'} = user;
console.log(name, age, gender, lastName)

*/
/*2
const hotel = {
    name: 'Hilton',
    stars: 5,
    capacity: 150,

}


const {stars, ...group} = hotel;
console.log(stars)
console.log(group)

*/
/*

const students = {
    units: {
        biology: 100,
        geography: 95,
    },

    skills: [100, 90, 95],
    name: 'Bob',

}

const {
    units: { biology, geography },
    skills: [skill1, skill2, skill3],
    name = students,
} = students;

console.log(biology);
console.log(geography);
console.log(skill1);
console.log(skill2);
console.log(skill3);
console.log(name);




const names = ['Tom', 'Nick', 'Bob', 'Jhon'];

const [names1, names2, names3, names4] = names;

console.log(names3)

 1st method
const rgb = [155, 200, 120];
const [red, green, blue] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue},`)
*/

/*2nd method

let red, green, blue;
[red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue},`)

*/

/*
const rgb = [155, 200, 120];
const [red, green, blue, alfa = 0.5] = rgb;

console.log(`Red: ${red}, Green: ${green}, Blue: ${blue},`)
*/
/*
const rgb = [155, 200, 120];
const [red, ...colors] = rgb;

console.log(red);
console.log(colors);

*/
/*
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    features: ['power windows', 'rear camera', 'navigation'],
    safety: {
      airbags: true,
      antilock_brakes: true,
      stability_control: true
    }
  }

const {
    make,
    model,
    year,
    features: [feature1, feature2, feature3],
    safety: {airbags, antilock_brakes, stability_control},
} = car;

console.log(model)
*/

/*2


const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const {
    title,
    director: {name, nationality},
    actors: [actors1, actors2],
    release_year,
    ratings: {imdb, rotten_tomatoes}
} = movie;


console.log(imdb)


*/


/*3

Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.




function calculateAverageGrade ({grades}){

    let sum = 0;
    for (let i = 0; i < grades.length; i++){

        sum += grades[i]
    }

    return sum / grades.length
}

const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };

  console.log(calculateAverageGrade(student));

*/


/*4


Напишіть функцію, яка отримує об'єкт зі списком електронних адрес (поле "emails") та використовує деструктуризацію для повернення першої адреси в цьому списку.



function getFirstEmail ({emails: [firstEmails, secondEmails, thirdEmails]}){

return thirdEmails

}


const person = {
    name: 'John',
    emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
  };

  console.log(getFirstEmail(person)); // 'john@gmail.com'

*/


/*5

Напишіть функцію, яка отримує масив об'єктів з інформацією про товари (назва, ціна, кількість) та використовує деструктуризацію для обчислення загальної вартості товарів.



function calculateTotalCost(items) {

    let total = 0;

    for (const { price, quantity } of items) {

        total += price * quantity

    }

    return total
}




const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
];
console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500



/*5
Напишіть функцію, яка отримує об'єкт зі списком користувачів (поле "users"), де кожен користувач є об'єктом з полями "ім'я" та "вік", та використовує деструктуризацію для повернення списку користувачів, які старші за 18 років.






function getAdultUsers({ users }) {

    const result = []

    for (const { name, age } of users) {

        if (age > 18) {
            result.push({ name, age })
        }
    }

    return result

}




const data = {
    users: [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 17 },
        { name: 'Bob', age: 30 },
        { name: 'Alice', age: 20 }
    ]
};

console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 20 }]



/*ДЗ лдя 24/04/25

Задача 1
Зробити декструктуризацію об'єкта:





const books = {
    count: 3,
    list: [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ]
}

/* 1st method
const {

    count,

    list
} = books

const [book1, book2, book3] = list

const { title: title1, author: author1, year: year1 } = book1;

const { title: title2, author: author2, year: year2 } = book2;

const { title: title3, author: author3, year: year3 } = book3;*/




/*2 method


const { list: [
    { title: title1 },
    { title: title2 },
    { title: title3 }
] } = books








console.log(title3)
*/
/*2
Задача 2
Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".




function personInfo ({name,surname,age}){

    return `Hello my name is ${name} ${surname} and i'm ${age} years old.`
};




const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
};
console.log(personInfo(person));
*/


/*1st method*

const end = function(){}

*2nd method*

function end (){}



const numbers = [100,58,210,487,65,12,10,9];

const filtredNumb = [];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > 100){
        filtredNumb.push(numbers[i])
    }

    console.log(filtredNumb)
}



const numbers = [100, 58, 210, 487, 65, 12, 10, 9];

const filtred = numbers.filter(numb => { return numb > 100; });

console.log(filtred);



/*12/05/25*/

/*forEach - нічого не повертає

const number = [1,2,3,4,5,6];

//1st method

for(let i = 0; i < number.length; i++){
    console.log(number[i])
}

//2nd method

numbers.forEach(num => console.log(num))

*/


/*map - повертає колекцію


const number = [1,2,3,4,5,6];

const newNumbers = number.map(num => num * 5)

console.log(newNumbers)




const user = [

    {name: 'Bob', age: 15},
    {name: 'Nick', age: 12},
    {name: 'Tom', age: 14},
]

const names = user.map(user => user.name)
console.log(names)

/*filter - повертає колекцію

const number = [1,2,3,4,5,6,7,8,9,10];

console.log(number.filter(num => num > 5));
console.log(number.filter(num => num < 5));
console.log(number.filter(num => num === 20));


const user = [

    {name: 'Bob', age: 15, isActive: true,},
    {name: 'Nick', age: 12, isActive: false},
    {name: 'Tom', age: 14, isActive: true},
]


console.log(user.filter(user => user.isActive))//is active
console.log(user.filter(user => !user.isActive))//is not active ! = not




const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log(players.filter(players => players.name))//Mango,poly,Kiwi,Ajax,Chelsy
console.log(players.filter(players => players.online))//Poly,Kiwi,Chelsy
console.log(players.filter(players => !players.online))//Ajax,Mango
*/



//method find шукає унікальний елемент
/*

const users = [
    {id:'1234', name:'Bob', age:17},
    {id:'1965', name:'Bob', age:19},
    {id:'7412', name:'Anna', age:15},
    {id:'8523', name:'Monika', age:27},
]


const users = user.find(user => user.id === '7412');
console.log(users)


const getUser = (arr,id) => arr.find(x => x.id === id)
console.log(getUser(users, '1234'));
console.log(getUser(users, '8523'));
*/

// method every and some
// method every: every components of the array has to be (example: >10)
// method some: 1 component of the array is (example >10) then il will be true even if all others are <10
/*



const numbers1 = [2, 5, 7, 3, 4];
const numbers2 = [12, 5, 87, 23, 74];

const isBig = val => val >= 10;

console.log(numbers1.every(isBig))//true
console.log(numbers2.every(isBig))//false 5 < 10

console.log(numbers1.some(isBig))//true
console.log(numbers2.some(isBig))//true


/*practice

function getEven(arr){

    return arr.filter(num => num % 2 === 0);
} 

const numbers = [12, 18, 35, 24, 36, 58];
const evenNumb = getEven(numbers);

console.log(evenNumb)


const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];

function filteredRange(arr, a, b){
    return arr.filter(item => item >= a && item <= b);
}

const filtered = filteredRange(array, 4, 16)

console.log(filtered);



function getName(peopleArray) {

    return peopleArray

    .filter(person => person.age >= 18)
    .map(person => person.name)
}




const people = [
  { name: 'John', age: 32, occupation: 'programmer' },
  { name: 'Jane', age: 26, occupation: 'teacher' },
  { name: 'Mike', age: 42, occupation: 'engineer' },
  { name: 'Emily', age: 17, occupation: 'designer' }
];

const adultNames = getName(people);
console.log(adultNames);





/*ДЗ для 19/05/25


const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

//Завдання 1
//Отримати масив імен всіх користувачів (поле name).
const getUserNames = users => {
    return users.map(user => user.name)
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//Завдання 2
//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
   return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

*/


/*practice

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


//1 console.log(players.map(players => players.name))

//2 console.log(players.filter(player => player.online))

//3 console.log(players.filter(player => !player.online))

//4 console.log(players.filter(player => player.timePlayed > 250))

//5 console.log(players.find(player => player.id === 'player-3' ))

//6 console.log(players.find(player => player.name === 'Ajax'))

//7 console.log(players.every(player => player.timePlayed > 200))

//8 console.log(players.every(player => player.online))


/*next array

const people = [
  { name: 'John',  surname: 'Doe',  age: 32, occupation: 'programmer' },
  { name: 'Jane', surname: 'Lee',  age: 26, occupation: 'teacher' },
  { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
  { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
];

const fullName = people.map((pearson, index) => ({
    id: index +1,
    fullName: `${pearson.name} ${pearson.surname}`
})  )    ;


console.log(fullName)
*/


/*next array

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

const strictName = array2.map(string => string[0] + string[string.length - 1]) ;

console.log(strictName)
*/

/*next ex.

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
};


console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
*/

/*r
/*method reduce

const numbers = [1, 8, 5, 7, 2, 23, 17, 8, 65, 10];

const sum = numbers.reduce((acc, value) => acc + value, 0)

console.log(sum)//146


const tweets = [
    {id: 0, likes: 40, tags:['js', 'html']},
    {id: 1, likes: 78, tags:['node', 'css']},
    {id: 2, likes: 42, tags:['scss', 'css', 'html']},
    {id: 3, likes: 31, tags:['js']},
    {id: 4, likes: 18, tags:['react','js']},

]

const tags = tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
}, [] );

console.log(tags)


const tags1 = tweets => tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
}, [] );




/*
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0)

console.log(likes)

const countLikes = tweets => tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
console.log(countLikes(tweets));
*/


/*ДЗ для 26/05/25

Порахувати загальну кількість товарів в кошику
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
  ];


const totalAmount = cart => cart.reduce((total, amount) =>
 total + amount.quantity, 0
);


 console.log(totalAmount(cart));


/*practice

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTime = players => players.reduce((maxTime, time) => 
maxTime + time.timePlayed, 0
);

console.log(totalTime(players))

const totalPoints = players => players.reduce((maxPoints, point) => 
maxPoints + point.points, 0 
);

console.log(totalPoints(players));

/*sort practice


const numbers = [9, 4, 6, 8, 3, 1, 7];

console.log(numbers);

console.log('After sort:', numbers.sort())

const names = ['Jhon', 'Tom', 'Bob', 'Anna', 'Marry']

console.log(names.sort())

/*2

const test = ['Y', 'f', 'A', 'a', 'y', 'N', 'g', 'U', 'B', 'F', 'O', 'o'];

console.log(test.sort())


const user = [
    { name: 'Anna', activeDays: 19 },
    { name: 'Tom', activeDays: 22 },
    { name: 'Bob', activeDays: 20 },
    { name: 'Pedro', activeDays: 15 },
    { name: 'Marry', activeDays: 5 },
];

const sortDays = (a, b) => b.activeDays - a.activeDays; //from + to -
console.log(user.sort(sortDays))

//const sortDays = (a, b) => a.activeDays - b.activeDays; //from - to ++
//console.log(user.sort(sortDays))

const fruits = ['pear', 'orange', 'apple', 'banana']

fruits.sort(function(a, b){ //from a to b
return a.localeCompare(b);
})

console.log(fruits)


//fruits.sort(function(a, b){ from b to a
//return a.localeCompare(b);
//})

//console.log(fruits)
/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const even = numbers.filter(x => x % 2 === 0);
const doubled = even.map(x => x * 2);
const reversed = doubled.reverse();

console.log(reversed)

/*

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numbers

.filter(x => x % 2 === 0)
.map(y => y * 2)
.reverse()

 

/*ДЗ для 30/05/25
/*Задача 1
Відсортувати по кількості проведенного часу в грі (від більшого до меншого)
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


const playTime = players.sort(( a,b) => b.timePlayed - a.timePlayed)

console.log(playTime)

/*Задача 2

const arr = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];

const filter = arr.sort((a, b) => a.name.localeCompare(b.name))

console.log(filter)


const people = [
  { name: 'John',  surname: 'Doe',  age: 32, occupation: 'programmer' },
  { name: 'Jane', surname: 'Lee',  age: 26, occupation: 'teacher' },
  { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
  { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
];

const first = people.map((person,index) => ({
    id: index + 1,
    fullName: `${person.name} ${person.surname}`
}))

console.log(first)

/*4

const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];

const array3 = array1.concat(array2) ;

console.log(array3)

const array4 = array3.filter((item, index, arr) => arr.indexOf(item) === index )

console.log(array4)




// Процедурний підхід

const baseSalary = 20000;

const overtime = 10;

const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
    baseSalary + overtime * rate
}

getWage(baseSalary,overtime,rate)

//OOP

const employee = {
    baseSalary: 20000,
    overtime:10,
    rate:20,
    getWage(){
        return this.baseSalary + this.overtime *  this.rate
    }

}

employee.getWage();


const animal = {
    legs: 4,
}

const dog = Object.create(animal);
dog.name = 'Sharik'

console.log(dog)

console.log(animal.isPrototypeOF(dog))//true
console.log(dog.hasOwnProperty(name))//true
console.log(dog.hasOwnProperty(legs))//false


const animal = {
    eats: true,

}

const dog = Object.create(animal)
dog.barks = true;

//for( const key in dog){
//    console.log(key)
//}

//for ( const key in dog){
//    if (!dog.hasOwnProperty(key)) continue;
//    console.log(key);
//}

//const dogKeys = Object.keys(dog)
//console.log(dogKeys)

/*
class User{
    constructor({name,email}) {
        this.name = name;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }


    changeEmail(newEmail) {
        this.email = newEmail
    }

}

const matviy = new User({
    name: 'Matviy',
    email: 'matviy@gmail.com',

});
const anna = new User({
    name: 'Anna',
    email: 'anna@gmail.com',

});

console.log(matviy)
console.log(anna)
*/


/*practcice

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }


    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('Jhon', 'Doe');
console.log(person1.getFullName());

const person2 = new Person('Matviy', 'Holovatyi');
console.log(person2.getFullName())


2*/
/*Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.
 // 50


class Rectangle {


    constructor(width, height){
        this.width = width,
        this.height = height
    }


    getArea(){
        return this.width * this.height
    }


}

const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea());



3*/
/*Створіть клас Animal, який має властивість name. Створіть клас Dog, який наслідується від Animal і має властивість breed. Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.
const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }

class Animal {

    constructor(name) {
        this.name = name
    }
}

class Dog extends Animal {

    constructor(name, breed) {

        super(name),

            this.breed = breed
    }
}

const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }


/*ДЗ для 14/07/25
Задача 1
Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.



class Calculator {



    add(a, b) {

        return a + b
    }

    subtract(a, b) {

        return a - b
    }

    multiply(a, b) {

        return a * b
    }

    divide(a, b) {


        if (b === 0) {

            return ' На нуль ділити не можна'
        }

        return a / b
    }




}

const calculator = new Calculator();
console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3
console.log(calculator.multiply(2, 4)); // 8
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // На нуль ділити не можна

/*Задача 2
Нехай є базовий клас Animal з методом makeSound(). Створіть підклас Cat, який буде наслідувати Animal та перевизначати метод makeSound().


class Animal {

    makeSound() {

        console.log('The Animal make a sound')
    }
}

class Cat extends Animal {

    makeSound() {
        
        console.log('Miao')
    }
}


const animal = new Animal();
animal.makeSound(); // "The animal makes a sound"

const cat = new Cat();
cat.makeSound(); // "Meow"*/


/*practice 
Створіть клас Animal, що містить властивість name. Додайте метод speak(), який повертає звук, який виділяє цей тварина. Створіть підклас Dog, що має свій власний метод speak(), який повертає звук "Bark!".




class Animal {

    constructor(name){
        
        this.name = name
    }

    speak(){
        return 'Animal sound'
    }
}

class Dog extends Animal {

    speak(){


        return 'Bark!'

    }
}


class Snake extends Animal {

    speak(){

        return 'Shhhhhh!'
    }
}


const animal1 = new Animal('Lion');
console.log(animal1.speak()); // Animal sound

const dog1 = new Dog('Pug');
console.log(dog1.speak()); // Bark!

const snake1 = new Snake('Yoda')
console.log(snake1.speak());// Shhhhhh!
*/


/*Створіть клас Product, що містить властивості name, price, та discount. Додайте метод getDiscountPrice(), який повертає ціну товару зі знижкою, якщо така є (якщо властивість discount є ненульовим числом, знижка відсотків від ціни повинна бути застосована).


class Product {

    constructor(name, price , discount){
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    getDiscountPrice(){

        if(this.discount && this.discount > 0){
            return this.price - (this.price * this.discount / 100)
        }

        return this.price
    }
}

const product1 = new Product('Phone', 500, 10);
console.log(product1.getDiscountPrice()); // 450


/*Нехай є базовий клас Person з властивостями name та age. Створіть підклас Employee, який буде мати всі властивості базового класу, а також властивість position.


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, position) {

        super(name, age);
        this.position = position;

    }


    getInfo(){
    
        return `${this.name} is a ${this.position} and is ${this.age} years old`
    }
}

const john = new Employee("John", 32, "programmer");
console.log(john.getInfo()); // "John is a programmer and is 32 years old"
const Matviy = new Employee('Matvyi', 12, 'programmer');
console.log(Matviy.getInfo()); //'Matvyi is a programmer and is 12 years old'

/*Створіть клас Shape, який має властивість color і метод draw. Створіть клас Circle, який наслідується від Shape і має властивість radius та перезаписує метод draw для відображення кола. Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".


class Shape {
    constructor(color){
        this.color = color;
    }

    draw(){
        console.log('Drawen shape')
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    draw(){
        console.log(`Drawen radius ${this.radius} ` )
    }

    


}

const myCircle = new Circle('red', 5);
myCircle.draw(); // Drawing a circle with radius 5
console.log(myCircle.color); // "red"

*/




/*dom*/



/*1
const button = document.querySelector('.btn');

button.style.backgroundColor = 'red';
button.style.color = 'gray';
button.style.borderColor = 'gray';
button.style.borderRadius = '15px';



const navList = document.querySelector('.site-nav')
navList.style.backgroundColor = 'yellow';

const firstLink  = navList.querySelector('a')
firstLink.classList.add('site-nav_link')

const httpsLink = navList.querySelector('a[href="https://"]')
httpsLink.style.fontSize = '26px';
httpsLink.style.color = 'red';
httpsLink.style.backgroundColor = 'skyblue';

const title = document.querySelector('.title')
title.textContent = 'My first title'
title.style.color = 'grey'





const newTitle = document.querySelector('#title');
newTitle.textContent = 'New title';
newTitle.style.color = 'skyblue';

const newBtn = document.querySelector('#btn');
newBtn.textContent = 'Buy here';
newBtn.style.backgroundColor = 'white';
newBtn.style.borderColor = 'skyblue';
newBtn.style.color = 'skyblue';
newBtn.style.padding = '10px 15px';
newBtn.style.borderRadius = '5px';
newBtn.style.cursor = 'pointer' ;



const links = document.querySelectorAll('ul a');
links.forEach(link => { 
const href = link.getAttribute('href')   
    if (href.startsWith('http://') || 
href.startsWith('ftp://') )
{
link.style.color = 'orange';
}
} )


if (links.lenght > 0 ){

    links[0].classList.add('first-link');
    links[links.length -1].classList.add('last-link');

}
    */


/*ДЗ для 25/07/25*/

/*вирішити задачу: Створити розмітку  зі списком елементів. За допомогою JavaScript 
отримати доступ до першого елемента списку та змінити його вміст на новий текст. 


const change = document.querySelector('.list');
change.firstElementChild.textContent = 'hi';

const head = document.createElement('h2');
head.textContent = 'My title';

const img = document.createElement('img');
img.src = 'https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=668&h=324&fit=crop'
img.alt = 'dog'

console.log(img);*/


/*Створити заголовок з текстом 'Привіт,
 це перший мій створений елемент!' та додати до нього клас “title”, заздалегідь створений в style.css.
  Додати заголовок на сторінку


const heading = document.createElement('h1');
heading.textContent = 'Hi this is my first title';
heading.classList.add('title')

document.body.appendChild(heading);

const img = document.createElement('img');
img.src =
 'https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=668&h=324&fit=crop'
img.alt = 'dog'

document.body.appendChild(img)

const button = document.createElement('button');
button.textContent = 'Click here';
button.style.display = 'block';

button.type = 'button';

button.id = 'myBtn';

document.body.appendChild(button)


const list = document.querySelector('.list');

const link = document.createElement('a');

link.href = '#';

link.textContent = 'about';

link.classList.add('site-nav__link');

const item = document.createElement('li');

item.classList.add('site-nav__item');

item.appendChild(link)

list.appendChild(item)


const blog = document.getElementById('blog');

const item = `<article>
  <h2>Новини дня</h2>
  <p>Сьогодні відбулася важлива подія...</p>
</article>`

blog.insertAdjacentHTML('beforeend', item);

const item1 = `<article>
  <h2>Новини дня 2</h2>
  <p>Сьогодні відбулася важлива подія...</p>
</article>`

blog.insertAdjacentHTML('afterbegin', item1);


const item2 = `<article>
  <h2>Новини дня 3</h2>
  <p>Сьогодні відбулася важлива подія...</p>
</article>`

blog.insertAdjacentHTML('afterend', item2);



const feature = document.getElementById("features");

feature.innerHTML = `<ul>
  <li>Швидко</li>
  <li>Безпечно</li>
  <li>Безкоштовно</li>
</ul>` ;


function createCard(name, description, price){
    const article = document.createElement('article');
    const title = document.createElement('h2');
    title.textContent = name;
    const description = document.createElement('p');
    description.textContent = description;
    const price = document.createElement('p');
    price.textContent = `price : ${price}`
    article.appendChild(title);
    article.appendChild(description);
    article.appendChild(price);
    return article;

}

const container = document.querySelector('.js-products');

const productCard = createCard('telefon', 'iphone', 1200);

container.appendChild(productCard);


const saveBtn = document.querySelector('button[data-action="save"]');

console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('button[data-action="close"]');

console.log(closeBtn.dataset.action);



Категорія: Тварини
Кількість елементів: 


const item = document.querySelectorAll('#categories .item');

console.log(`in the list there are ${item.length} categories ` );

item.forEach(categorie => {
    const title = categorie.querySelector('h2').textContent;
    const itemsCount = categorie.querySelectorAll('ul li').length
    console.log(`categoria ${title}`) 
    console.log(`quantity ${itemsCount}`) 
})




const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const list = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {

    const li = document.createElement('li');
    li.textContent =  ingredient;

return li;
    
})

list.append(...items)
/*
ingredients.forEach(ingredient => {

    const li = document.createElement('li');
    li.textContent =  ingredient;
    list.appendChild(li);
 } )
*/
/*

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('#gallery');

const markup = images.map(({
    url, alt
}) => {return
`<li> <img src="${url}" alt="${alt}"> </li> `
}).join('')
list.insertAdjacentHTML('beforeend', markup)
*/



/*
const btn = document.getElementById('btn');

const counter = document.getElementById('counter');

let count = 0;

btn.addEventListener('click', function(){
    count++,
    counter.textContent = count;
})



const btn = document.getElementById('button');

btn.addEventListener('click', function(){
    if (btn.style.backgroundColor === 'red')
    {btn.style.backgroundColor = 'aquamarine'}
    else {
        btn.style.backgroundColor = 'red'
    }
} )





const title = document.getElementById('myTitle');

const btn = document.querySelector('.btnColor');

btn.addEventListener('click', function(){
    title.classList.add('title')
} )

const form = document.querySelector('.form');

const text = document.getElementById('text');

form.addEventListener('submit', function(event){
    event.preventDefault();
    text.textContent = 'You succesfuly registred, thank you!';
})




const btn = document.querySelector('.button');

btn.addEventListener('click', function(){
    alert('Hello world');
})


const btn = document.getElementById('btn');


const input = document.getElementById('input');



btn.addEventListener('click', function(){
    const name = input.value.trim()
    if(name){
        alert(`Hello ${name}`)
    }
    else{
        alert('Please insert your name')
    }
})

/*
const btn = document.getElementById('btn');

let original = true;

btn.addEventListener('click', function(){
    if(original){
        document.body.style.backgroundColor = 'gray';
    }
    else{
        document.body.style.backgroundColor = 'white';
    }

    original = !original
})

*/

/*ДЗ для __*/

/*

const btn = document.querySelector('.button');

const text = document.querySelector('.text');

btn.addEventListener('click', function (event) {

    if (event) {
        
        text.style.display('none')
    }

})






const input = document.getElementById('input');

input.addEventListener('input', function(){
    alert('Hello Matvyi');
})*/
