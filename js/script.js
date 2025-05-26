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

/*2*/

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

/**/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numbers

.filter(x => x % 2 === 0)
.map(y => y * 2)
.reverse()